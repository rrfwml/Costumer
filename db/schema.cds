namespace sap.ui.customer;

using {API_BUSINESS_PARTNER as bupa} from '../srv/external/API_BUSINESS_PARTNER';

entity Customers as
    projection on bupa.A_BusinessPartner {
      key BusinessPartner as ID,
          Customer,
          FirstName,
          LastName,
          OrganizationBPName1,
          CreatedByUser,
          CreationDate 
    }