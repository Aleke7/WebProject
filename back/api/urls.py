from django.urls import path
from .views import *

urlpatterns = [
    path('login/', LoginAPIView.as_view()),
    path('category/', CategoryAPIListView.as_view()),
    path('product/', ProductAPIListView.as_view()),
    path('category/<int:pk>/', get_products_by_id)

]