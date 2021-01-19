from django.http import HttpResponse, JsonResponse
from app.core.utils.helpers import _url_params, _orient_records_to_list, _df_to_list, _success_response, _json_response, _push_to_results
from stocks_handler.ticker import Ticker

# Utilities



def _is_quarterly(url_path):
    '''Boolean quarterly parameter'''
    url_params_list = _url_params(url_path)
    return True if url_params_list[4] else False



# Views

def stock_info(request, ticker):
    # figure out what yf returns if there is no stock
    stock = Ticker(ticker)
    stock_info = stock.info()
    return_json = _json_response()
    return_json = _push_to_results('stock_info', stock_info, return_json)
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
    '''Convert Unix Timestamp'''
    stock = Ticker(ticker)
    quarterly = _is_quarterly(request.path)
    df = stock.financials(quarterly)
    return_json = _df_to_list(df)
    return JsonResponse(return_json)


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
    df = stock.balance_sheet(quarterly)
    return_json = _df_to_list(df)
    return JsonResponse(return_json)


def stock_cashflow(request, ticker):
    '''returns empty DF'''
    stock = Ticker(ticker)
    quarterly = _is_quarterly(request.path)
    df = stock.cashflow(quarterly)
    return_json = _df_to_list(df)
    return JsonResponse(return_json)


def stock_earnings(request, ticker):
    '''returns empty DF'''
    stock = Ticker(ticker)
    quarterly = _is_quarterly(request.path)
    df = stock.earnings(quarterly)
    return_json = _df_to_list(df)
    return JsonResponse(return_json)


def stock_sustainability(request, ticker):
    stock = Ticker(ticker)
    df = stock.sustainability()
    return_json = _df_to_list(df)
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
    return_json = _df_to_list(df)
    return JsonResponse(return_json)


def stock_isin(request, ticker):
    '''returns ISIN = International Securities Identification Number (String)
    '''
    stock = Ticker(ticker)
    isin_str = stock.isin()
    return_json = _success_response(isin_str)
    return HttpResponse(return_json)


def stock_options(request, ticker):
    '''Returns a tuple of expiration dates'''
    stock = Ticker(ticker)
    options_tuple = stock.options()
    return_json = _success_response(options_tuple)
    return JsonResponse(return_json)


def stock_option_chain(request, ticker, expiration, option):
    stock = Ticker(ticker)
    return_json = stock.option_chain(expiration, option)
    return JsonResponse(return_json)
