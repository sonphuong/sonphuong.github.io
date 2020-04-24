# Giải thích chi tiết package.json trong nodejs project

Xét ví dụ file package.json sau 
<pre><code>
{
    "name": "my-first_app",
    "version": "1.0.0",
    "description": "Node.js on Docker",
    "author": "Son Montana <dosonphuong@gmail.com>",
    "main": "server.js",
    "scripts": {
      "start": "node server.js"
    },
    "dependencies": {
      "express": "^4.16.1"
    }
    "devDependencies": {

    }
}
</code></pre>
## package.json là gì? 
Là file chứa metadata (siêu dữ liệu - dữ liệu về dữ liệu) về project 
bây giờ chúng ta sẽ đi từng dòng của file trên để xem cụ thể ra sao
- name: tên của dự án, phải là 1 từ viết thường, có thể chứa gạch ngang và gạch dưới như trên.  
- version: phải theo định dạng x.x.x 
- description: mô tả về dự án 
- author: tác giả
- main: điểm bắt đầu của thư viện, khi có ai đó gọi tới thư viện thì đây sẽ là điểm đầu tiên được thực thi. 
    ví dụ: require('library_name') = require(<package.json:main>)
- script: run in the shell, terminal command nơi mà nó được thực thi, đối với linux là bash và windows sẽ là cmd.exe   
- devDependencies: khai báo những gói mà project phụ thuộc trên môi trường local và testing 
- dependencies: khai báo những gói mà project phụ thuộc trên môi trường production, trong trường hợp này là express.js, những phiên bản trong vùng ^4.16.1

^ gọi là "caret range" caret: 1 cái dấu, range là vùng, hiểu đơn giản là một cái dấu để xác định vùng của phiên bản   
 cho phép những cập nhật phiên bản mà nhỏ hơn số v +1 , v là số không phải là số 0 đầu tiên(tính từ trái sang phải).

 vd: ^4.16.1 sẽ đc upgrade lên phiên bản cao nhất mà nhỏ hơn 5.0.0
 - 4 là phiên bản major (bản chính)
 - 16 là phiên bản minor (bản thứ)
 - 1 là phiên bản patch (bản vá lỗi) 

Xem thêm những ví dụ sau

- ^0.0.3 => v là số 3, số đầu tiên không phải là số 0 vậy vùng phiên bản sẽ là 0.0.3 =< x.x.x < 0.0.4 
- ^0.2.3 => v là số 2, số đầu tiên không phải là số 0 vậy vùng phiên bản sẽ là 0.2.3 =< x.x.x < 0.3.0
- ^1.2.3 => v là số 1, số đầu tiên không phải là số 0 vậy vùng phiên bản sẽ là 1.2.3 =< x.x.x < 2.0.0
để biết thêm xem ở đây https://docs.npmjs.com/misc/semver


## Đăt package.json tại đâu?
package.json phải được đặt tại thư mục gốc của Nodejs project
