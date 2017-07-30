import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import {ApolloModule} from "apollo-angular";
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

const networkInterface = createNetworkInterface({
  uri: 'http://127.0.0.1:8000/graphql'
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};  // Create the header object if needed.
    }
    // get the authentication token from local storage if it exists
    req.options.headers.authorization = localStorage.getItem('token') || "Bearer 3XEvIV2BNjIb20DcQMUeAe7wVFHFvL";
    next();
  }
}]);

const client = new ApolloClient({
  networkInterface
});

export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ApolloModule.forRoot(provideClient),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
