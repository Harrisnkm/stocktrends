import yfinance as yf

class Ticker:
    '''
    Uses YFinance API to receive stock information
    '''


    def __init__(self, ticker):
        self.ticker = ticker
        self.stock = yf.Ticker(ticker)

    def info(self):
        return self.stock.info

    def history(self, period):
        return self.stock.history(period=period)

    def actions(self):
        return self.stock.actions

    def dividends(self):
        return self.stock.dividends

    def splits(self):
        return self.stock.splits

    def financials(self, quarterly=False):
        if quarterly:
            return self.stock.quarterly_financials
        else:
            return self.stock.financials

    def major_holders(self):
        return self.stock.major_holders

    def institutional_holders(self):
        return self.stock.institutional_holders

    def balance_sheet(self, quarterly=False):

        if quarterly:
            return self.stock.quarterly_balance_sheet
        else:
            return self.stock.balance_sheet

    def cashflow(self, quarterly=False):

        if quarterly:
            return self.stock.quarterly_cashflow
        else:
            return self.stock.cashflow

    def earnings(self, quarterly=False):

        if quarterly:
            return self.stock.quarterly_earnings
        else:
            return self.stock.earnings

    def sustainability(self):
        return self.stock.sustainability

    def recommendations(self):
        return self.stock.recommendations

    def calendar_events(self):
        return self.stock.calendar

    def isin(self):
        return self.stock.isin

    def options(self):
        return self.stock.options

    def option_chain(self, expiration, option):
        '''User must include an option?'''
        options = self.stock.option_chain(expiration)

        if option == 'calls':
            return options.calls
        if option == 'puts':
            return options.puts
        else:
            return options




