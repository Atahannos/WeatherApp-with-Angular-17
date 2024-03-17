import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgIf } from '@angular/common';

import { NgFor } from '@angular/common';
@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgIf],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  datas: any[];
  cityName: string = '';
  temperature: number;
  visibility: string;
  windSpeed: string;
  rainIntensity: string;
  cloudCover;

  constructor(private http: HttpClient) {}

  async getCityCoordinates(cityName: string) {
    await this.http
      .get(
        `https://api.tomorrow.io/v4/weather/realtime?location=${cityName}&apikey=O91nT2TRFC25ULgkuoAE5FMgEdLkZh2I`
      )
      .subscribe((data: any) => {
        console.log(data);
        this.temperature = data.data.values.temperature;
        this.visibility = data.data.values.visibility;
        this.windSpeed = data.data.values.windSpeed;
        this.rainIntensity = data.data.values.rainIntensity;
        this.cloudCover = data.data.values.cloudCover;
      });
  }
}
