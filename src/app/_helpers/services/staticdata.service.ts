import { Injectable } from '@angular/core';
import { Role } from '../models';
import { menuItem } from '../models/menu';

@Injectable({ providedIn: 'root' })
export class StaticService {
  productTypes = { signPost: 'signpost', payinvoice: 'PayInvoice' };
  constructor() {

  }

  public mileageOptions = [
    { id:1, title:'Vancouver / Camas / Ridgefield', price:0},
    { id:2, title:'Battle Ground / La Center', price:5},
    { id:3, title:'Amboy / Yacolt / Washougal', price:15},
    { id:4, title:'Woodland / Kalama', price:25},
    { id:5, title:'Longview / Kelso', price:30},
  ]

  public lights = [
    { id:1, title:'Top Light', price:15},
    { id:2, title:'Arm Lights', price:30},
  ]

  public signOptions = [
    { id:1, title:'I have my sign', price:0},
    { id:2, title:'You have my sign', price:0},
  ]

  public signTypeOptions = [
    { id:1, title:'Personal', price:0},
    { id:2, title:'Generic', price:0},
  ]


  public callOption = [
    { id:1, title:'I will call 811', price:0},
  ]

  public flyerBox = [
    { id:1, title:'Yes', price:5}
  ]

  public topClips = [
    { id:1, title:'Yes', price:0}
  ]

  public paint = [
    { id:2, title:'Black Paint', price:10}
  ]

  public menus: menuItem[] = [
    {
      id: 'mndashboard', title: 'Dashboard', icon: 'assets/images/d-1.png',
      link: '/member',  active: false, roles: [ ]
    },
    {
      id: 'mnprofile', title: 'Update Profile', icon: 'assets/images/d-6.png',
      link: '/member/profile',  active: false, roles: [ ]
    }, 

  ];

  public USStates= [{"name":"Alabama","abbreviation":"AL"},{"name":"Alaska","abbreviation":"AK"},{"name":"American Samoa","abbreviation":"AS"},{"name":"Arizona","abbreviation":"AZ"},{"name":"Arkansas","abbreviation":"AR"},{"name":"California","abbreviation":"CA"},{"name":"Colorado","abbreviation":"CO"},{"name":"Connecticut","abbreviation":"CT"},{"name":"Delaware","abbreviation":"DE"},{"name":"District Of Columbia","abbreviation":"DC"},{"name":"Federated States Of Micronesia","abbreviation":"FM"},{"name":"Florida","abbreviation":"FL"},{"name":"Georgia","abbreviation":"GA"},{"name":"Guam","abbreviation":"GU"},{"name":"Hawaii","abbreviation":"HI"},{"name":"Idaho","abbreviation":"ID"},{"name":"Illinois","abbreviation":"IL"},{"name":"Indiana","abbreviation":"IN"},{"name":"Iowa","abbreviation":"IA"},{"name":"Kansas","abbreviation":"KS"},{"name":"Kentucky","abbreviation":"KY"},{"name":"Louisiana","abbreviation":"LA"},{"name":"Maine","abbreviation":"ME"},{"name":"Marshall Islands","abbreviation":"MH"},{"name":"Maryland","abbreviation":"MD"},{"name":"Massachusetts","abbreviation":"MA"},{"name":"Michigan","abbreviation":"MI"},{"name":"Minnesota","abbreviation":"MN"},{"name":"Mississippi","abbreviation":"MS"},{"name":"Missouri","abbreviation":"MO"},{"name":"Montana","abbreviation":"MT"},{"name":"Nebraska","abbreviation":"NE"},{"name":"Nevada","abbreviation":"NV"},{"name":"New Hampshire","abbreviation":"NH"},{"name":"New Jersey","abbreviation":"NJ"},{"name":"New Mexico","abbreviation":"NM"},{"name":"New York","abbreviation":"NY"},{"name":"North Carolina","abbreviation":"NC"},{"name":"North Dakota","abbreviation":"ND"},{"name":"Northern Mariana Islands","abbreviation":"MP"},{"name":"Ohio","abbreviation":"OH"},{"name":"Oklahoma","abbreviation":"OK"},{"name":"Oregon","abbreviation":"OR"},{"name":"Palau","abbreviation":"PW"},{"name":"Pennsylvania","abbreviation":"PA"},{"name":"Puerto Rico","abbreviation":"PR"},{"name":"Rhode Island","abbreviation":"RI"},{"name":"South Carolina","abbreviation":"SC"},{"name":"South Dakota","abbreviation":"SD"},{"name":"Tennessee","abbreviation":"TN"},{"name":"Texas","abbreviation":"TX"},{"name":"Utah","abbreviation":"UT"},{"name":"Vermont","abbreviation":"VT"},{"name":"Virgin Islands","abbreviation":"VI"},{"name":"Virginia","abbreviation":"VA"},{"name":"Washington","abbreviation":"WA"},{"name":"West Virginia","abbreviation":"WV"},{"name":"Wisconsin","abbreviation":"WI"},{"name":"Wyoming","abbreviation":"WY"}]

  public reviews = [
  ]
}