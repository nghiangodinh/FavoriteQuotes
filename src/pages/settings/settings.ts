import { SettingsService } from './../../services/settings';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    private settingsService: SettingsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(toggle: Toggle) {
    this.settingsService.setBackground(toggle.checked)
  }

  checkAltBackground() {
    return this.settingsService.isAltBackground()
  }
}
