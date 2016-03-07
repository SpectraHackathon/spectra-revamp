from bs4 import BeautifulSoup
import urllib2
#chris03072016

soup = BeautifulSoup(open("target.html"))

for item in soup.find_all('option'):
	print(''.join(str(item.find(text=True))));