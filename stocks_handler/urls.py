from django.urls import path
from . import views

urlpatterns = [
    path('info/', views.stock_info),
    path('history/<period>', views.stock_history),
    path('actions/', views.stock_actions),
    path('dividends/', views.stock_dividends),
    path('splits/', views.stock_splits),
    path('financials/', views.stock_financials),
    path('financials/quarterly', views.stock_financials),
    path('major-holders/', views.stock_major_holders),
    path('institutional-holders/', views.stock_institutional_holders),
    path('balance-sheet/', views.stock_balance_sheet),
    path('balance-sheet/quarterly/', views.stock_balance_sheet),
    path('cashflow/', views.stock_cashflow),
    path('cashflow/quarterly/', views.stock_cashflow),
    path('earnings/', views.stock_earnings),
    path('earnings/quarterly/', views.stock_earnings),
    path('sustainability/', views.stock_sustainability),
    path('recommendations/', views.stock_recommendations),
    path('calendar-events/', views.stock_calendar_events),
    path('isin/', views.stock_isin),
    path('options/', views.stock_options),
    path('options/<expiration>/<option>', views.stock_option_chain),
]