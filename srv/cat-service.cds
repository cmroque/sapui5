using my.bookshop as my from '../db/data-model';

service CatalogService {
    @readonly 
    entity tb_Books as projection on my.Books;
    entity tb_Items as projection on my.Items;

    function test() returns String;
} 