const ApiRoutes = {
   createAlias:{method:"POST",url:"createalias"},
   getAllAlias:{method:"GET",url:"getallalias"},
   sendEmail:{method:"GET",url:"sendmail"},
   isAliasExist:{method:"GET",url:'isaliasexist'},
   isUpdateAlias:{method:'GET',url:'isupdatealias'},
   isaliasexistdelete:{method:"POST",url:'isaliasexistdelete'},
   deleteAlias:{method:"DELETE",url:'deletealias'},
   verifyoldalias:{method:'POST',url:'verifyoldalias'},
   updatealias:{method:'POST',url:'updatealias'},
   helpquery:{method:'POST',url:'helpquery'}
}
export {ApiRoutes}