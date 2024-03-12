# Test project for internship in vk communities

Simple SPA that fakes loading the list of communities and displays them for the user. Each community card displays name, avatar (optional), id, users count, friends count (optional). On friends count click the list of all friends present in this group is displayed.
Above the list there is a block of 3 selects and 2 buttons for sumbit or reset filters. Data and filters are stored in mobX stores.

I am not sure if i had to make simple server to fake requests and use fetch \ axios. Also all filters work with inital data because of it.

Styles are pretty much nonexistent. Almost missed the application message so didn't have the time to play with vk components.

## Installation

yarn install
yarn dev
