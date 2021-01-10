import discord
from django.conf import settings
import os
import pandas as pd
import yfinance as yf


client = discord.Client()
guild = discord.Guild
discord_token = os.environ['DISCORD_TOKEN'] #for testing individual file

@client.event
async def on_ready():
    print('We have logged in as {0.user}'.format(client))

@client.event
async def on_message(message):
    if message.author == client.user:
        return

    if message.content.startswith('_'):
        cmd = message.content.split()[0].replace("_", "")
        if len(message.content.split()) > 1:
            parameters = message.content.split()[1:]

    #check the user

    if message.content.startswith('**'):
        stock = message.content.split()[0].replace("**", "")
        print('stock:', stock)

        stock_info = yf.Ticker(stock)
        stock_info = stock_info.info
        print(stock_info)

    print(message.content)




client.run(discord_token)