import discord
from django.conf import settings
import os
import pandas as pd

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


    print('content:', message.content)
    print('author:', message.author)


client.run(discord_token)