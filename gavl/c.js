let h1 = document.createElement("h1")
h1.innerText = "Sơ lược về mô hình Client-Server và giao thức HTTP"
document.body.appendChild(h1)

let h2 = document.createElement("h2")
h2.innerText = "1. Mô hình Client-Server"
document.body.appendChild(h2)

let p = document.createElement("p")
p.innerText = "Để hiểu được mô hình Client-Server, chúng ta hãy lấy 1 ví dụ nhỏ là: bạn muốn biết thời tiết của thành phố trong hôm nay.\n                Để làm điều này, bạn sẽ cần hỏi một người biết về điều kiện thời tiết ở thành phố. Giả sử chưa có máy tính, bạn có thể biết được thông tin thời tiết qua báo, đài. Trong quá trình này, có hai người tham gia riêng biệt. Đầu tiên là bạn, người muốn biết thông tin về thời tiết. Người thứ hai là báo hoặc đài, người cung cấp thông tin về thời tiết. Nếu đặt tên cho hai người tham gia này, chúng ta có. : \n    "
document.body.appendChild(p)

let ol = document.createElement("ol")
let li1 = document.createElement("li")
let li2 = document.createElement("li")
li1.innerText = "Người tiêu dùng muốn biết một thông tin cụ thể, là người đưa ra yêu cầu, hay còn được gọi là Client trong ngữ cảnh Client-server."
li2.innerText = "Nhà cung cấp thông tin, là người tiếp nhận yêu cầu và xử lý nó, hay còn gọi là Server trong ngữ cảnh Client-server."
ol.appendChild(li1)
ol.appendChild(li2)
document.body.appendChild(ol)

let img = document.createElement("img")
img.src = "https://images.viblo.asia/d5120380-d38f-4383-a221-e690746e261f.png"
document.body.appendChild(img)



let h3 = document.createElement("h2")
h3.innerText = "1.1. Thế nào là Client"
document.body.appendChild(h3)

let p1 = document.createElement("p")
p1.innerText = "Client trong mô hình client/server, người ta còn định nghĩa cụ thể cho một máy client là một máy trạm mà chỉ được sử dụng bởi 1 người dùng.Máy client có thể sử dụng các hệ điều hành bình thường như Win9x, DOS, OS/2...Bản thân mỗi một client cũng đã được tích hợp nhiều chức năng trên hệ điều hành mà nó chạy, nhưng khi được nối vào một mạng LAN, WAN theo mô hình client/server thì nó còn có thể sử dụng thêm các chức năng do hệ điều hành mạng (NOS) cung cấp với nhiều dịch vụ khác nhau (cụ thể là các dịch vụ do các server trên mạng này cung cấp), ví dụ như nó có thể yêu cầu lấy dữ liệu từ một server hay gửi dữ liệu lên server đó...Thực tế trong các ứng dụng của mô hình client/server, các chức năng hoạt động chính là sự kết hợp giữa client và server với sự chia sẻ tài nguyên, dữ liệu trên cả hai máy vai trò của client Trong mô hình client/server, client được coi như là người sử dụng các dịch vụ trên mạng do một hoặc nhiều máy chủ cung cấp và server được coi như là người cung cấp dịch vụ để trả lời các yêu cầu của các clients.Điều quan trọng là phải hiểu được vai trò hoạt động của nó trong một mô hình cụ thể, một máy client trong mô hình này lại có thể là server trong một mô hình khác. Ví dụ cụ thể như một máy trạm làm việc như một client bình thường trong mạng LAN nhưng đồng thời nó có thể đóng vai trò như một máy in chủ (printer server) cung cấp dịch vụ in ấn từ xa cho nhiều người khác (clients) sử dụng. Client được hiểu như là bề nổi của các dịch vụ trên mạng, nếu có thông tin vào hoặc ra thì chúng sẽ được hiển thị trên máy client.\n Điều quan trọng là phải hiểu được vai trò hoạt động của nó trong một mô hình cụ thể, một máy client trong mô hình này lại có thể là server trong một mô hình khác. Ví dụ cụ thể như một máy trạm làm việc như một client bình thường trong mạng LAN nhưng đồng thời nó có thể đóng vai trò như một máy in chủ (printer server) cung cấp dịch vụ in ấn từ xa cho nhiều người khác (clients) sử dụng. Client được hiểu như là bề nổi của các dịch vụ trên mạng, nếu có thông tin vào hoặc ra thì chúng sẽ được hiển thị trên máy client."
document.body.appendChild(p1)

let h4 = document.createElement("h2")
h4.innerText ="1.2. Thế nào là Server"
document.body.appendChild(h4)

let p2 = document.createElement("p")
p2.innerText="Server còn được định nghĩa như là một máy tính nhiều người sử dụng (multiuser computer). Là một nhà cung cấp dịch vụ cho các clients yêu cầu tới khi cần, các dịch vụ như cơ sở dữ liệu, in ấn, truyền file, hệ thống...\n Vì một server phải quản lý nhiều yêu cầu từ các client trên mạng cho nên nó hoạt động sẽ tốt hơn nếu hệ điều hành của nó là đa nhiệm với các tính năng hoạt động độc lập song song với nhau như hệ điều hành UNIX, WINDOWS...\n Server cung cấp và điều khiển các tiến trình truy cập vào tài nguyên của hệ thống. Các ứng dụng chạy trên server phải được tách rời nhau để một lỗi của ứng dụng này khô ng làm hỏng ứng dụng khác.\n Các ứng dụng server cung cấp các dịch vụ mang tính chức năng để hỗ trợ cho các hoạt động trên các máy clients có hiệu quả hơn. Sự hỗ trợ của các dịch vụ này có thể là toàn bộ hoặc chỉ một phần thông qua IPC.\n Để đảm bảo tính an toàn trên mạng cho nên server này còn có vai trò như là một nhà quản lý toàn bộ quyền truy cập dữ liệu của các máy clients, nói cách khác đó là vai trò quản trị mạng. Có rất nhiều cách thức hiện nay nhằm quản trị có hiệu quả, một trong những cách đang được sử dụng đó là dùng tên Login và mật khẩu."
document.body.appendChild(p2)

let h5 = document.createElement("h2")
h5.innerText ="2. Giao thức HTTP"
document.body.appendChild(h5)

let p3 = document.createElement("p")
p3.innerText="Nếu thảo luận về ví dụ trên, bạn có thể đọc báo hoặc nghe đài để biết được thông tin về thời tiết. Báo đài sử dụng ngôn ngữ địa phương của bạn và bạn có thể hiểu được những gì viết trên báo hoặc nói trên đài.\n Tuy nhiên, đối với Client và Server trên Web chúng ta cần phải có một phương thức giao tiếp, cụ thể là một giao thức để hai hệ thống có thể hiểu và tương tác với nhau. Giao thức này được gọi là giao thức truyền thông HTTP.\n Client và Server được kết nối với nhau bằng giao thức HTTP. Khi kết nối được thiết lập, Client sẽ gửi yêu cầu tới Server dưới dạng XML hoặc Json mà cả hai đều có thể hiểu được. Sau khi hiểu yêu cầu, Server sẽ trả về một response (phản hồi) để trả về dữ liệu mà Client yêu cầu dưới dạng XML hoặc Json."
document.body.appendChild(p3)

let img2 = document.createElement("img")
img2.src = "https://images.viblo.asia/eba9c82c-a77b-4e2e-8d8f-621c411acdb0.png"
document.body.appendChild(img2)

let p4 = document.createElement("p")
p4.innerText="Tài liệu tham khảo"
document.body.appendChild(p4)

let link = document.createElement("a")
link.href ="https://www.toolsqa.com/client-server/client-server-architecture-and-http-protocol/"
link.innerText = "https://www.toolsqa.com/client-server/client-server-architecture-and-http-protocol/"
let link2 = document.createElement("a")
link2.href ="https://vi.wikipedia.org/wiki/Mô_hình_client-server"
link2.innerText="https://vi.wikipedia.org/wiki/Mô_hình_client-server"
let button = document.createElement("button")
button.innerText = "API testing"
document.body.appendChild(button)
document.body.appendChild(link)
document.body.appendChild(link2)