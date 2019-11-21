
package store

/*
存储以下信息(实例化在内存中)
1.所有用户(包括离线用户)
2.所有进行中的task
3.orm对象
*/

import (
	orm "github.com/astaxie/beego/orm" // TODO keke  学习下beego-orm
	"fmt"
	_ "github.com/go-sql-driver/mysql"
)

var (
	O orm.Ormer
	DB_DATASOURCE string = "data.db" // "root:123456@tcp(127.0.0.1:3306)/go?charset=utf8"
	DB_DRIVERTYPE orm.DriverType = orm.DRMySQL // orm.DRSqlite
	DB_DRIVERNAME string = "sqlite3" // "mysql"
	DB_ALIASNAME  string = "default"
)

func ConnectDb(){
	   orm.RegisterDriver(DB_DRIVERNAME, DB_DRIVERTYPE)
       orm.RegisterDataBase(DB_ALIASNAME, DB_DRIVERNAME, DB_DATASOURCE)
       orm.RegisterModel(new(User), new(Profile))
       O = orm.NewOrm()
}
