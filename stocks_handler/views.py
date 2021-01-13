from django.http import HttpResponse, JsonResponse
from stocks_handler.ticker import Ticker
import json


# Utilities

def _url_params(url_path):
    '''parse url get parameters'''
    return url_path.split('/')


def _is_quarterly(url_path):
    '''Boolean quarterly parameter'''
    url_params_list = _url_params(url_path)
    return True if url_params_list[4] else False


def _success_response(return_json):
    '''Encloses Results in Json to passback to FE'''
    return_dict = {
        'success': True,
        'results': return_json
    }

    return return_dict


def _orient_records_to_list(df):
    '''Records Orientation -> Json'''
    df_json_str = df.to_json(orient="records")
    return_json = json.loads(df_json_str)
    return _success_response(return_json)

def _is_df_empty(df):
    '''Checks if dataframe is empty
    may not need this'''
    if df.empty:
        print('dataframe is empty')
        return HttpResponse('Dataframe is empty')

# Views

def stock_info(request, ticker):
    # figure out what yf returns if there is no stock
    stock = Ticker(ticker)
    return_json = stock.info()
    return JsonResponse(return_json)


def stock_history(request, ticker):
    stock = Ticker(ticker)
    url_params = _url_params(request.path)
    period = url_params[4] if url_params[4] else 'max'  # sets the period
    df = stock.history(period)
    return_json = _orient_records_to_list(df)
    return JsonResponse(return_json)


def stock_actions(request, ticker):
    stock = Ticker(ticker)
    df = stock.actions()
    return_json = _orient_records_to_list(df)
    return JsonResponse(return_json)


def stock_dividends(request, ticker):
    stock = Ticker(ticker)
    df = stock.dividends()
    return_json = _orient_records_to_list(df)
    return JsonResponse(return_json)


def stock_splits(request, ticker):
    stock = Ticker(ticker)
    df = stock.splits()
    return_json = _orient_records_to_list(df)
    return JsonResponse(return_json)


def stock_financials(request, ticker):
    '''returns empty DF'''
    stock = Ticker(ticker)
    quarterly = _is_quarterly(request.path)
    return_json = stock.financials(quarterly)
    return HttpResponse(return_json)


def stock_major_holders(request, ticker):
    stock = Ticker(ticker)
    df = stock.major_holders()
    return_json = _orient_records_to_list(df)
    return JsonResponse(return_json)


def stock_institutional_holders(request, ticker):
    stock = Ticker(ticker)
    df = stock.institutional_holders()
    return_json = _orient_records_to_list(df)
    return JsonResponse(return_json)


def stock_balance_sheet(request, ticker):
    '''returns empty DF'''
    stock = Ticker(ticker)
    quarterly = _is_quarterly(request.path)
    return_json = stock.balance_sheet(quarterly)
    return JsonResponse(return_json)


def stock_cashflow(request, ticker):
    '''returns empty DF'''
    stock = Ticker(ticker)
    quarterly = _is_quarterly(request.path)
    return_json = stock.cashflow(quarterly)
    return JsonResponse(return_json)


def stock_earnings(request, ticker):
    '''returns empty DF'''
    stock = Ticker(ticker)
    quarterly = _is_quarterly(request.path)
    return_json = stock.earnings(quarterly)
    return JsonResponse(return_json)


def stock_sustainability(request, ticker):
    stock = Ticker(ticker)
    df = stock.sustainability()
    return_json = _orient_records_to_list(df)
    return JsonResponse(return_json)


def stock_recommendations(request, ticker):
    stock = Ticker(ticker)
    df = stock.recommendations()
    return_json = _orient_records_to_list(df)
    return JsonResponse(return_json)


def stock_calendar_events(request, ticker):
    '''Returns DataFrame'''
    stock = Ticker(ticker)
    df = stock.calendar_events()
    return_json = _orient_records_to_list(df)
    return HttpResponse(return_json)


def stock_isin(request, ticker):
    '''returns ISIN = International Securities Identification Number
    String
    '''
    stock = Ticker(ticker)
    return_json = stock.isin()
    return HttpResponse(return_json)


def stock_options(request, ticker):
    '''Returns a tuple of expiration dates'''
    stock = Ticker(ticker)
    return_json = stock.options()
    return HttpResponse(return_json)


def stock_option_chain(request, ticker, expiration, option):
    stock = Ticker(ticker)
    return_json = stock.option_chain(expiration, option)
    return JsonResponse(return_json)
