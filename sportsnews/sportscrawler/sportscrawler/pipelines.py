from myapp.models import Article


# class SportscrawlerPipeline(object):
#     def process_item(self, item, spider):
#         # item.save()
#         Article.objects.create(
#                 title=item['title'],
#                 image=item['image'],
#                 link=item['link']
#             )
#         return item


from scrapy.exceptions import DropItem
from twisted.internet import reactor, threads

class SportscrawlerPipeline:
    def process_item(self, item, spider):
        # Run the database operation in a separate thread
        d = threads.deferToThread(self.save_article, item)
        d.addBoth(self.check_item)
        return d

    def save_article(self, item):
        try:
            Article.objects.create(
                title=item['title'],
                image=item['image'],
                link=item['link']
            )
            return item
        except Exception as e:
            raise DropItem(f"Failed to save article: {e}")

    def check_item(self, result):
        if isinstance(result, DropItem):
            raise result
        return result
