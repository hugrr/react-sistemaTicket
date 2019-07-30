from django.contrib import admin
from django.urls import path, include
from api import views, viewToken

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView,
)
urlpatterns = [
    path('token/', viewToken.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('miembro/', views.MiembroView.as_view(), name='id-Miembro-usr'),
    path('grupo/', views.GrupoNameView.as_view(), name='id-grupo-usr'),
    path('anuncio/', views.AnuncioView.as_view(), name='id-grupo-usr'),
   # path('miembro/<int:user_id>', views.MiembroView.as_view()),
]