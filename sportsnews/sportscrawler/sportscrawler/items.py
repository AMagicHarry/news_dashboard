import scrapy

class SportscrawlerItem(scrapy.Item):
    title = scrapy.Field()
    image = scrapy.Field()
    link = scrapy.Field()
