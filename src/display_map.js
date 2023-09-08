$(function (){
    $('select').multipleSelect({
        width:200,
        
        formatSelectAll:function(){
            return 'すべて';
        },
        formatAllSelected:function(){
            return 'すべて選択されています';
        }
    });
});