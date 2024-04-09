using { sap.ui.customer as my } from '../db/schema';
@path: 'service/customer'
service CustomerService {
  @readonly
  entity Customers @(restrict :
    [
       { grant : ['READ'],
        to :['CustomerViewer']
       }
    ]
  ) as projection on my.Customers
}