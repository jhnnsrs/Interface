import { Injectable } from '@angular/core';
import {Apollo, ApolloQueryObservable} from "apollo-angular"
import {Subscription} from "rxjs/Subscription";
import "rxjs/add/operator/map";

@Injectable(
)
export class SkriptServiceService {
  parts: string[];
  query: any;
  subscript : any

  constructor(private apollo: Apollo) {
  }

  initiate<T>(string: String, query: any){
      //TODO: Parse String
      string = "UI -> Preprocess -> Validate -> Cache -> Server -!> UI";
      this.parts = string.split(" ");
      this.query = query;
      return this.sub<T>();

  }

  private parseString<T>(): ApolloQueryObservable<T>{
    // THE CHAIN SHOULD BE BUILD HERE

    let subscription: ApolloQueryObservable<T>;
    subscription = this.apollo.watchQuery<T>({query: this.query});



    return subscription;
  }


  sub<T>() {
    return this.parseString<T>();
  }

  push<T>() {


  }

  usex() {


  }

  usey() {


  }

  choose() {


  }

  server() {



  }

  preprocess() {


  }

}

export abstract class PassThrough{



}

export abstract class Alerter {


}

export abstract class NodePoint{


}

export class Preprocess extends PassThrough{



}

export class Validate<T> extends Alerter{

  datainput: any;
  dataoutput: any;
  subs: ApolloQueryObservable<T>;

  call() {
    if (this.datainput === this.dataoutput) {
      this.subs.map(it => it.data);
    }

  }


}



export class Server<T> extends NodePoint{


    static get<T>(){


    }

    static push<T>(apollo: Apollo, options){
      return apollo.mutate(options)
    }



}

export class UI extends NodePoint{



}
