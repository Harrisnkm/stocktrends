from django.shortcuts import render
import json
from django.http import HttpResponse, JsonResponse
import yfinance as yf
from .classes.ticker import Ticker


# Create your views here.

def stock_info(request, ticker):
    #figure out what yf returns if there is no stock
    stock = Ticker(ticker)
    return_json = stock.info()
    return JsonResponse(return_json)

def stock_history(request, ticker, period="max"):
    stock = Ticker(ticker)
    return_json = stock.history()
    return JsonResponse(return_json)

def stock_actions(request, ticker):
    stock = Ticker(ticker)
    return_json = stock.actions()
    return JsonResponse(return_json)

def stock_dividends(request, ticker):
    stock = Ticker(ticker)
    return_json = stock.dividends()
    return JsonResponse(return_json)

def stock_splits(request, ticker):
    stock = Ticker(ticker)
    return_json = stock.splits()
    return JsonResponse(return_json)

def stock_financials(request, ticker, quarterly):
    stock = Ticker(ticker)
    quarterly = True if quarterly else False
    return_json = stock.financials(quarterly)
    return JsonResponse(return_json)

def stock_major_holders(request, ticker):
    stock = Ticker(ticker)
    return_json = stock.major_holders()
    return JsonResponse(return_json)

def stock_institutional_holders(request, ticker):
    stock = Ticker(ticker)
    return_json = stock.institutional_holders()
    return JsonResponse(return_json)

def stock_balance_sheet(request, ticker, quarterly):
    stock = Ticker(ticker)
    quarterly = True if quarterly else False
    return_json = stock.balance_sheet(quarterly)
    return JsonResponse(return_json)

def stock_cashflow(request, ticker, quarterly):
    stock = Ticker(ticker)
    quarterly = True if quarterly else False
    return_json = stock.cashflow(quarterly)
    return JsonResponse(return_json)

def stock_earnings(request, ticker, quarterly):
    stock = Ticker(ticker)
    quarterly = True if quarterly else False
    return_json = stock.earnings(quarterly)
    return JsonResponse(return_json)

def stock_sustainability(request, ticker):
    stock = Ticker(ticker)
    return_json = stock.sustainability()
    return JsonResponse(return_json)

def stock_recommendations(request, ticker):
    stock = Ticker(ticker)
    return_json = stock.recommendations()
    return JsonResponse(return_json)

def stock_calendar_events(request, ticker):
    stock = Ticker(ticker)
    return_json = stock.calendar_events()
    return JsonResponse(return_json)

def stock_isin(request, ticker):
    stock = Ticker(ticker)
    return_json = stock.isin()
    return JsonResponse(return_json)

def stock_options(request, ticker):
    stock = Ticker(ticker)
    return_json = stock.options()
    return JsonResponse(return_json)

def stock_options_chain(request, ticker, expiration, option):
    stock = Ticker(ticker)
    return_json = stock.options_chain(expiration, option)
    return JsonResponse(return_json)