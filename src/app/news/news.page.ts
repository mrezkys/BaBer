import { NewsService } from './../news.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  articles: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?country=us&category=business').subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}
