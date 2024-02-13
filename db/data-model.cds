namespace my.bookshop;

using { managed } from '@sap/cds/common';

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}
  
entity Items {
  key ID : Integer;
  title  : String;
  stock  : Integer;
}

entity TB_CATALOG : managed {
  key CATALOG_NAME : String(100);
  key SUPPLIER_ID : String(100);
  ACTIVATION_DATE : Timestamp;
  IS_UPDATED : Boolean;
  CATALOGITEM : Composition of many TB_CATALOGITEMS on CATALOGITEM.CATALOG = $self;
}

entity TB_CATALOGITEMS : managed {
  key SUPPLIER_PART_ID : String(100);
    SUPPLIER_NAME : String(100);
    MANUFACTURER_PART_ID : String(100);
    MANUFACTURER_NAME : String(100);
    PRICE_AMOUNT : String(100);
    PRICE_CURRENCY : String(100);
    APPLICABLE_CONTRACTS : String(100);
    LEAD_TIME : String(100);
    COMMODITY_CODE : String(100);
  key ACTIVATION_DATE : Timestamp;
  key CATALOG : Association to TB_CATALOG;
}

entity Users {
  key ID : String(100);
    FirstName : String(50);
    LastName : String(50);
    Country : String(100);
}