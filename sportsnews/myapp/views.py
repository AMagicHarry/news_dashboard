from django.shortcuts import render
from django.views.generic import ListView
from .models import Article
from django.views.decorators.http import require_POST, require_http_methods
from django.views.decorators.csrf import csrf_exempt
from scrapyd_api import ScrapydAPI
from django.contrib.auth.decorators import login_required
import time
from django.shortcuts import render, redirect
from django.conf import settings as django_settings
# Create your views here.

#for scrapy
import os
import sys

path = django_settings.BASE_DIR
sys.path.append(path + "/sportscrawler")

from scrapy import signals
from twisted.internet import reactor
from scrapy.crawler import Crawler,CrawlerRunner
from scrapy.settings import Settings
from scrapy.utils.project import get_project_settings
from sportscrawler import settings as sports_settings
from scrapy.utils.log import configure_logging
from crochet import setup
from sportscrawler.spiders import sports_spider

import sys


def home1(request):
    return render(request, "news/starter.html")

class SportsListView(ListView):
    model = Article
    template_name = 'news/sports_home.html'
    paginate_by = 5

@csrf_exempt
@require_http_methods(['POST', 'GET'])
def scrape2(request):
    Article.objects.all().delete()
    crawler_settings = Settings()

    setup()
    configure_logging()
    crawler_settings.setmodule(sports_settings)
    runner= CrawlerRunner(settings=crawler_settings)
    d=runner.crawl(sports_spider.SportsSpider)
    d.addBoth(lambda _: reactor.stop())  # Stop the reactor after crawling
    # reactor.run()  # Start the reactor
    time.sleep(10)
    return redirect("../getsportsnews/")

@login_required
def menu_list(request):
    return render(request, "news/topics_list.html")