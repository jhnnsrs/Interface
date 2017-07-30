import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

// We use the gql tag to parse our query string into a query document
const CurrentUserForProfile = gql`
  query CurrentUserForProfile {
    symptom: symptom(id: "U3ltcHRvbU5vZGU6MQ==") {
    id
    name
    description
      associateddiseases {
        edges {
          node {
            id
            name {
              id
              name
            }
          }
        }
      }
    }
  }
`;

interface QueryResponse{
  symptom
}


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name: String = "Hund";
  description: String = "Franz";
  disease: String = "FRANZZ"

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<QueryResponse>({
      query: CurrentUserForProfile
    }).subscribe(({data}) => {
      this.name = data.symptom.name;
      this.description = data.symptom.description;
      this.disease = data.symptom.associateddiseases.edges[0].node.id
    });
  }

}
