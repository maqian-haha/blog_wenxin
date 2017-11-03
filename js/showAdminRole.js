BUI.use(['bui/grid','bui/data'],function(Grid,Data){
    var Grid = Grid,
        Store = Data.Store,
        enumObj = {"1" : "增加","2" : "删除","3" : "修改","4" : "查询"},
        columns = [
            {title : 'id',dataIndex :'lid'}, //editor中的定义等用于 BUI.Form.Field.Text的定义
            {title : '角色', dataIndex :'lname'},
            {title : '内容权限',dataIndex : 'connum',renderer : Grid.Format.multipleItemsRenderer(enumObj)},
            {title : '留言权限',dataIndex : 'messagenum',renderer : Grid.Format.multipleItemsRenderer(enumObj)},
            {title : '管理员权限',dataIndex : 'adminnum',renderer : Grid.Format.multipleItemsRenderer(enumObj)},
            {title : '操作',renderer : function(){
                return '<span class="grid-command btn-edit">编辑</span>'
            }}
        ];
//分页
    if(location.search.indexOf("pages")>-1){
        var pages=location.search.substr(location.search.lastIndexOf("=")+1)
    }else{
        var pages=0;
    }
//依赖注入
    var isAddRemote = false,
        editing = new Grid.Plugins.DialogEditing({
            contentId : 'content', //设置隐藏的Dialog内容
            triggerCls : 'btn-edit', //触发显示Dialog的样式
            editor : {
                title : '添加角色',
                width : 600,
                success:function(){
                    var editor=this,
                    form=editor.get("form");
                    form.valid();
                    var type=editing.get("editType");
                   /* console.log(form.serializeToObject());*/
                    if(form.isValid()){
                        form.ajaxSubmit({
                            url:"index.php?m=admin&f=showAdminRole&a=addAdminRole&type="+type,
                            type:"post",
                            data:form.serializeToObject(),
                            dataType:"text",
                            success:function(e){
                                if(e){
                                    if(e!="edit"){
                                        form.setFieldValue("lid",e);
                                    }
                                    editor.accept();
                                }
                            }
                        })
                    }

                }
            }
        }),
        store = new Store({
            url:"index.php?m=admin&f=showAdminRole&a=selectRole&pages="+pages,
            autoLoad:true
        }),
        grid = new Grid.Grid({
            render:'#grid',
            columns : columns,
            width : 700,
            forceFit : true,
            tbar:{ //添加、删除
                items : [{
                    btnCls : 'button button-small',
                    text : '<i class="icon-plus"></i>添加',
                    listeners : {
                        'click' : addFunction
                    }
                },
                    {
                        btnCls : 'button button-small',
                        text : '<i class="icon-remove"></i>删除',
                        listeners : {
                            'click' : delFunction
                        }
                    }]
            },
            plugins : [editing,Grid.Plugins.CheckSelection],
            store : store
        });

    grid.render();

    //添加记录
    function addFunction(){
        var newData = {b : 0};
        editing.add(newData,'a'); //添加记录后，直接编辑
    }
    //删除选中的记录
    function delFunction(){
        var selections = grid.getSelection();
        var data="";
        selections.map(function(e){
            data+=e.lid+",";
        })
        data="("+data.slice(0,-1)+")";
        console.log(data);
        $.ajax({
            url:"index.php?m=admin&f=showAdminRole&a=delete",
            type:"post",
            data:"lids="+data,
            success:function(e){
                if(e=="del"){
                    store.remove(selections);
                }else if(e=="err"){
                    alert("对不起，您没有权限");
                }
            }
        })

    }
});