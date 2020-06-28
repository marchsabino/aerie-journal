import { Component, OnInit } from '@angular/core';
import { NewsArticle } from 'src/app/shared/models';
import { NewsFeedService } from 'src/app/shared/services/news-feed.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss'],
})
export class NewsfeedComponent implements OnInit {
  articles: NewsArticle[];

  constructor(private newsFeed: NewsFeedService) {}

  getArticles() {
    this.newsFeed.getNewsArticles().subscribe((articles) => {
      this.articles = articles;
    });
  }

  ngOnInit(): void {
    this.getArticles();
  }
}
