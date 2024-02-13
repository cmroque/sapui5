using my.bookshop as my from '../db/data-model';

using {
     managed,
     sap
} from '@sap/cds/common';

service CatalogService {
    @readonly 
    entity tb_Books as projection on my.Books;
    entity tb_Items as projection on my.Items;

    function test() returns String;
    function getBook() returns String;
} 

service UserService {
    @readonly
    entity Users as projection on my.Users;
    entity TB_CATALOG as projection on my.TB_CATALOG;
    entity TB_CATALOGITEMS as projection on my.TB_CATALOGITEMS;

    function GetUsers() returns String;
}
