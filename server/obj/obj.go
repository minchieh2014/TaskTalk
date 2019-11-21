
// 这里放置所有和json对象和orm对象相关的结构体

package obj

type User struct {
	Id int `json:"id" pk:"auto" orm:"column(id)"`
	Name string `json:"name" orm:"column(name)"`
	LastLogin int `json:"lastlogin" orm:"column(lastLogin)"`
	Lastlogout int `json:"lastLogout" orm:"column(lastLogout)"`
	LastIP int `json:"lastLogout" orm:"column(LastIP)"`
}