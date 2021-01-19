import json

'''Helper Functions'''


def _url_params(url_path):
    '''parse url get parameters'''
    return url_path.split('/')


def _success_response(return_json):
    ''' template for return dictionary '''
    return_dict = {
        'success': True,
        'results': {}
    }

    return return_dict


def _json_response():
    ''' template for return dictionary '''
    return_dict = {
        'success': True,
        'results': {}
    }

    return return_dict

def _push_to_results(key, value, return_json):
    return_json['results'][key] = value
    return return_json


def _orient_records_to_list(df):
    '''Records Orientation -> Json'''
    df_json_str = df.to_json(orient="records")
    return_json = json.loads(df_json_str)
    return _success_response(return_json)


def _df_to_list(df):
    df_json_str = df.to_json()
    return_json = json.loads(df_json_str)
    return _success_response(return_json)


def _is_df_empty(df):
    '''Checks if dataframe is empty
    may not need this'''
    if df.empty:
        print('dataframe is empty')
