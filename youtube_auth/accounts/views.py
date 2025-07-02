from django.shortcuts import render, redirect
from .forms import RegisterForm
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
import uuid

# Simulated token store
verification_tokens = {}

def register_view(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.is_active = False  # simulate email verification
            user.save()
            token = str(uuid.uuid4())
            verification_tokens[token] = user.username
            return redirect(f'/verify/{token}')
    else:
        form = RegisterForm()
    return render(request, 'register.html', {'form': form})

def verify_view(request, token):
    username = verification_tokens.get(token)

    if username:
        user = User.objects.get(username=username)
        user.is_active = True
        user.save()
        messages.success(request, "Account Verified Successfully!")
        return redirect('login')
    else:
        return render(request, 'verify.html', {'error': 'Invalid or expired token.'})
    

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user:
            if user.is_active:
                login(request, user)
                return redirect('dashboard')
            else:
                messages.error(request, 'Account not verified.')
        else:
            messages.error(request, 'Invalid credentials.')
    return render(request, 'login.html')

def logout_view(request):
    logout(request)
    return redirect('login')

@login_required
def dashboard_view(request):
    return render(request, 'dashboard.html')