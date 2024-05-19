import scrapy
from ..items import SportscrawlerItem
from myapp.models import Article


class SportsSpider(scrapy.Spider):
    name = "sports"
    start_urls = [
        'https://indianexpress.com/section/sports/',
    ]

    def parse(self, response):
        cnt = 0
        for quote in response.css("a.click-event"):
            if cnt % 2 == 0:
                img = quote.css("img").xpath("@src").get()
                link = quote.xpath("@href").get()
            else:
                text = quote.css('::text').get()
                item = SportscrawlerItem()
                item['title'] = text
                item['image'] = img
                item['link'] = link     
                yield item
            cnt += 1