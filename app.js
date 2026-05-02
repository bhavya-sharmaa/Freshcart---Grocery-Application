/* ================= GLOBAL ================= */
let selected = null;
let modalCount = 1;

/* ================= STORAGE ================= */
function getCart(){ return JSON.parse(localStorage.getItem("cart")) || []; }
function setCart(cart){ localStorage.setItem("cart", JSON.stringify(cart)); }

/* ================= PRODUCT IMAGES ================= */
const productImages = {
  1:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&q=80",
  2:"https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=300&q=80",
  3:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=800&q=80",
  4:"https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&q=80",
  5:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=300&q=80",
  6:"https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&q=80",
  7:"https://images.unsplash.com/photo-1601232265936-6da280cff563?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  8:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=300&q=80",
  9:"https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=300&q=80",
  10:"https://images.unsplash.com/photo-1550583724-b2692b85b150?w=800&q=80",
  11:"https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&q=80",
  12:"https://images.unsplash.com/photo-1576186726115-4d51596775d1?w=800&q=80",
  13:"https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&q=80",
  14:"https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&q=80",
  15:"https://images.unsplash.com/photo-1632576883732-f131be0be48a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  16:"https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=300&q=80",
  17:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80",
  18:"https://images.unsplash.com/photo-1550828520-4cb496926fc9?w=300&q=80",
  19:"https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=300&q=80",
  20:"https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=300&q=80",
  21:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=300&q=80",
  22:"https://plus.unsplash.com/premium_photo-1722961405963-68d07a1fb633?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  23:"https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=300&q=80",
  24:"https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&q=80",
  25:"https://images.unsplash.com/photo-1585059895524-72359e06133a?w=300&q=80",
  26:"https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=300&q=80",
  27:"https://images.unsplash.com/photo-1508747703725-719777637510?w=300&q=80",
  28:"https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  29:"https://images.unsplash.com/photo-1664289242854-e99d345cfa92?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  30:"https://images.unsplash.com/photo-1613743983303-b3e89f8a2b80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  31:"https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=300&q=80",
  32:"https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=300&q=80",
  33:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=300&q=80",
  34:"https://images.unsplash.com/photo-1730127487636-b7fe550af030?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  35:"https://plus.unsplash.com/premium_photo-1663844169550-7fa698a59231?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  36:"https://plus.unsplash.com/premium_photo-1666270423836-864dfa7071e5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWdncGxhbnR8ZW58MHx8MHx8fDA%3D",
  37:"https://images.unsplash.com/photo-1739903760973-4731a8e79a03?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Yml0dGVyJTIwZ291cmR8ZW58MHx8MHx8fDA%3D",
  38:"https://plus.unsplash.com/premium_photo-1723485627473-7227c17bf7ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFkZGlzaHxlbnwwfHwwfHx8MA%3D%3D",
  39:"https://images.unsplash.com/photo-1621953723422-6023013f659d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fwc2ljdW18ZW58MHx8MHx8fDA%3D",
  40:"https://images.unsplash.com/photo-1603431777782-912e3b76f60d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2luZ2VyfGVufDB8fDB8fHww",
  41:"https://plus.unsplash.com/premium_photo-1675731118551-79b3da05a5d4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FybGljfGVufDB8fDB8fHww",
  42:"https://images.unsplash.com/photo-1576763595295-c0371a32af78?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JlZW4lMjBjaGlsbGl8ZW58MHx8MHx8fDA%3D",
  43:"https://images.unsplash.com/photo-1535189487909-a262ad10c165?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29yaWFuZGVyfGVufDB8fDB8fHww",
  44:"https://images.unsplash.com/photo-1570586437263-ab629fccc818?w=300&q=80",
  45:"https://images.unsplash.com/photo-1590502593747-42a996133562?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVtb258ZW58MHx8MHx8fDA%3D",
  46:"https://images.unsplash.com/photo-1739065882919-03c8ae1a3da3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8a3Vya3VyZXxlbnwwfHwwfHx8MA%3D%3D",
  47:"https://media.potatopro.com/kurkure-witnesses-1200.jpg",
  48:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbBAJUHhRULnFFPxLFz6Qjzt9xkILGofoV3A&s",
  49:"https://imgproxy.divecdn.com/HB-82VSsDpKv8CJP1VAeDQaG2-WFYgXKxGqwFYMZjfA/g:ce/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9QcmluZ2xlc19OZXdfQ2FuX0Rlc2lnbi5qcGc=.webp",
  50:"https://images.unsplash.com/photo-1600952841320-db92ec4047ca?w=300&q=80",
  51:"https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=300&q=80",
  52:"https://m.media-amazon.com/images/I/71hg43SB4ML.jpg",
  53:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExIVFRUVFRUYFRUVFRUXFxUVFhUYFxUWFRUaHSggGBolHRYXIT0iJikrLi4wGB8zODMsNygtLisBCgoKDg0OGxAQGy8lICUtLS0tLS0tLS0rLS0tLS4tLSstLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0vLSstLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABIEAACAQIDBQQFCAcIAQQDAAABAgMAEQQSIQUTMUFRBiJhcQcygZGxFCNScqGywfAlM0Jic9HhJDVEU4KSs8IVNEPi8Rdjov/EABkBAAMBAQEAAAAAAAAAAAAAAAACAwEEBf/EACkRAAICAQIFBAMAAwAAAAAAAAABAhEDITEEEhQyQRNRYYEicaEzwfD/2gAMAwEAAhEDEQA/AOzCjpN6OtNFUK45267bY1MZLh4pREkMgsUXvMMinK5YkEXJOgFVG1/SfjpI5Iw6R52BDxDK8a/QVs3PTvcePXS64ebSZT03Vne6Fef9oelPHywJCrJEy2zToBvJMvDQnKt+JsNfAaVJ2n6T8dOsQQrhyli7R2O+YWtcH1U4925vfU1q4ebMWNs7vR1xHaPpQxkjxNGEhCasg74lbnnJFwv7o1HU6WcxHpQxjSCRFjRVQAxEZkY31Yk94X4aHSjppjejI7XR3rz/AIb0h7QQSscRmaXUFlUiE8jCh0XTSxuOZuaSvpTxwxRxGdShAX5Mf1QUfRsbh+ebx6aAfDTFeNo9B3o6897L9KW0EneZ2WZXFty1ljT6Jjsbrb25ufIh7ZHpHx8LTO8gmMwuBJfJC/BTEgOi20y87A3vck6eYLHJnfqK9cAwPpBx8UMkQmzmRiwlku0kZb1ghva3QEWW+mlgHsN6SNopGY96rmwAkdAXXXqLBumoNHTTG9CR3kmirgW0vSFtGVBHv8g7pLxKEkNgNMw4AnU2t04aUWO9J+0DG8e9UF1UCRVUOlh3ih6t1INr6Wo6aZjxSR32hXnjF+k7aD4dIBKEZfWnSwlkA4AkmwPUjU++8jaPpJx88UcYkEJTKXkiNnlZeBbWyjS5UaHy0oXDzMWNs79RGuDbV9ImPnZGWbcZALrEBZn5s2a9x+6dB40r/wDImPMyTb0WVQu6y/NPpZmdQQSxOt7i3AaXvvTTG9GR3U0k1xo+lPGZ1YpFlAOaMKQHuTY3JJUgWHHl42qJB6R8UMZ8qcBkKZDhwzLGEvcZeNnvrmseJHDQZ00w9GR240hq4tF6T8UuKecqHiZcow2YhFAN1ZWse/qbtbvXtyWysH6U8Ym9zxxSF2JjvdRDpYKAPXUWvYm9760dNMX05HZDSDXDYfSLj0hljLh2kJKSt68N/WCACxHQHh48KkH0o41rACFO6oPcLMWAsz3uACTra1h40dNMPTZ2miqu7NYt5sJh5XN3eGNmNgLsVBJsNB7Ksag1ToRqgqFChWATaVSaOgDz12/uNpYu6trILGx1GRbEeHGsykOa5P413j0k9nlngacEK8QvfqNBr4cPcOlcXZTYHrXoYZ80f0dMPyRESC3D8aWb9aevSSaumUoaN+tLRWIewJst9OmZbn3UdxT2DxRidZFNmU3H8qG9AIWJJOgBHnf8KIYUfm9Xm0gjlZY9BJmJT6DLa9vA3+w8OArzcUsXYqje5HVSOFHr1+2ni1IvTJjUN3NGCaXpQrbAEwIOqnVUsbcRlGo9t/dURYSxN/xrRbNxIkj+TObakxP9A21B8D+eAIrSpsDU03dMWm2RFgt/9ml69aeuaJjTpjUM69ftNAXpy4otK2wEgGhkNLBpVFgICW6URv0p3MKBkFZbNoiuT9Go8gvytU9pPCtt6J+zaTyviZhm3BXdxm2UM17O3UjLp51LJPlViSdKzpfZbCvFgsNHILOkMYYdGCC4qyNLNINea3bs5HqFQoUKAJgo70ijoAz/AKQ3I2biiP8AL+LKK4MVOVT4fjXevSBrs3FX/wAo/eFcPgS8S+34murh9jpwbFczmk76n54aiMtdaZSVoc31FvfCmTRVti2yxje5jH7rfeakSXFKwXrReR+89ScTDU1uPHVFeZDRb6jljtTBFUTFdju98KG9HSmKF6LMtk3DTWbT6L/canFU5FPn8aiYT1v9L/carTCJeIeBPxpJPUaOpXs5pO+NSJ4aiOtMglaF76i3vhTJor1ti2yRvR0ob7wqPeheiwtj++8KLf01S0jvRYWxauTXVvQ0e7ih0aH7r1zCKLUV0/0Oj/1n1ofhJUOI7DMnYdGNJNKpJrgOUTQo6FAEgUdEDR1gFB2//u7Ffwj8RXFMBrEPM12r0gLfZ2K/hX9zAj4VxTZn6v2muvB2/Z0YBudanS7IjhiEuILXYjLGtv2hmAf97L3rXWwI1JOWomIW9xVvidsxlmlEkyFyjPCqRkb1ECZo5mN47hQMwXMKM7yaKB1NEGPs00jgBXiDxFxcB8rqAShuVNrFfJnCnUGxT9kZM8mUgRjMYyzKxkTvGNroMozBT5dKVjO0sjqVWOOMFCpIDFxmCqxVydCQi62vxN9TVXi8ZJKbySM9zezMSL9QvAewVkIcS92l/STokYrA7iWKMsGOW9xw1d7WsTysfbUidagMSTCSSdANegdgB5AAD2VZzirxTWj3GgRsFs9pnyggAAs7HgiLxJA1PEAAakkVIm2XE0jwRJI7osmZyw7jqpsht3T84Ah056MwF6PZ2LRN4kmbJKmUslsyEEMrAEi+o4XHGpL9ochuC2IY3OaVFiQMR626QnO3IsxuQWXQMa5srzOf4rTwNJEdeybNBvFzbw5QI2CKFIkZZCWLEsoVb6Acb6jSmH7KugzSSKtldmA1Iy3NgDa+gBuOo6g0jFbdnfg+7FkForoPmzdDe5bMNO9e+g6VX5zcm5uwsxubkdCedUjj4h7yS+iWg1ho+9/pf7jVabO1j/1Gim2bLAYzIhQTQNJGeTxvG2oI04HUcRcX40eyv1Z86vJhHcTOtSxsmOOET4gsA2Uoi2uQ+Ypm8WCswFxYLckEhTHnWrWXbEZs+9ljYpGskaxxurNGMqvG7n5s255bi541DO8lJQ+yzRAj7PGV0sjxLJGzcnyuN4UFiQcrKqNqf27Xpc/Y+TeMFIEQNkdyGLWXjZL2Ba4HMcNTxPE9pZGUqkcaAqVLHNJJ3jctvGPrXAbMRfNma92NVWLxsst95I73NyGYkEgBb5eF7KvLkKSEOJflL+knQnaey9yVUuGLLmOWxA1IFmBIbgda2no+7BQY3DSYjEPKlpSiZGRQVVFJJLKf2mI/01k9n7OmxJZYkaRo4i5A1IjQi+Uc9WGg61peyc+LbBvaULgoJ4WYftNIZUYIjAE5cxRmHMNYcTa8uZQpvUnPbQqp+xeKWFpxA+7S7Zs0bXj4hsqnMNLEi1UiLW3xGBnnkf5LicqYnEthGXNIiSNDh8wZhl0BSMLwJvzIOmLjFPjle48HY/hk7wro3og9bG/Xh+Elc/wQ74rf+iA643+JF8JKln7WGftOj0g0q9IJrhOMFCivRUASVpVNilCgCi7ff3div4R+Irimy/1ftNdq7ff3div4R+Iriuy/1ftNdWDt+zowF/hVRcBLNuoXkXFRKDLEkllaMkqLi4BIHAg0ztjYUZGGnR0w8eKjzZJGdgkocI6RBVZ2Ukg8DYZiTbgxDtdUw8mGeHeI8iyXEpiZWRbCxyMCPMVNXtKzhl+TmKNYYo8OIpSrQCOTeMBMylm3mis1gbAacad8ydoo1PwIi7IOQmHfdJI2O+TtKM7sv9naVe7mClCADyOovaxFQtm7DgxKOsLzl0kwqZiECOs825d44xdlVSUa7G9jqBarLF9tvnjKsC3+VLiReUtldcOICuijMpW546HrVHsfaSYZZJI2kEzpJEqKAI1R1ALs5YliLmy20Kgk0y9SrEqXkZ2zJG2IBiQJGGYRqCSMiyuqm51JIAbzJqVMaqTxi8v+71a4g601eCsNjVY7AQS7Um2fuIo1disMkKLG8TjDiUE5bCRTZgQwJ72hFqy+G2AzKZBJC+6kgE8YaT5veuFAZwoVtTYhGLLfkatJu1f9pkxceEC4mQECQzM6xsYxGXSHIO9lFtWIHvpcnaQLE0e6dQ8WGTIZ+5G+GkV86R5Nc5F2JOY9edT/ADjsI1NLRELbmwY4d9NI+ULipcOsGHS/fSNXUiSRrBO8L3BPTjonbOxosNFNIoZ1lOFXCs5BISWH5RK5sACRYJe2mbrTW2e0IxV1aMRq+KbEMVZnZTIqo4F8oYALcCw5C/Ooe2NpCRYYULtDh1dY2k0Zs7ZnYoCQi3sqrc2VRrcmnip6WYlLyabam2I/k6YWaPO6YPDvhW/y2kwQWYMfo2AYD6Q8qy2yfUPnUWKQk6knuOLkk6CMgDXw0qVsn1D51vJy6DQjTNBs8IMFi5TFE7xyYTIZY0kyh5GVwMw0uOlMbW2TE8GHxismHjmEokVi7KssUgjtCihpGDm7ZRmKgHkDZnC7VWOGaB4d4kxiLWkMbKYmLKVbI3M8xU2PtEWTdjDmKJYHig3UpEkLSOHklEzKczsRYnKCATbndHzJ2gal4ER9knCvA+6V/lmGg3t3dlE6AoyKCFKEMDrY8tLCocOwYZRiIoXleeAJZiEWOQjECGUomr5QHUgkjgdLVY43tpeRpBALtPhZ7GUtlkw0aoBogzKcvOxv1vYU+y9rrBI+KUyCctLu41AEdpQbtI5a5VSxISxuVTXjbV6lWJUvJbbKxvyXF4+TCgKMNAyx3Js25xOHQlzxIcqxPg9TcLtvDN8rERWCBTg3hjdgCx+Wb7EMq8zysL91ErBo9hYXAIsdTqPHrqAdelAGneFPVm8iZ07Z20oDir/KIbf+XmnvvUAMUmEZEdST3hmYA2vY8ay+1dkZpoFhVFglVNzJlA4jv/KZhfNIhBza2UC4AB1zYNOCZsuTM2Qm5TMchPUpexPja9YsXK7TGjCnaZMwI74863foeOuN/iRfCSsFs/1hW79Dv+M/iRfCSp5+1mZu06Rekk0L0ljXEcgKFIo6AJN6UDSBRisAo+3x/R2K/hH7wri+yh837TXZ+3x/R2K/h/8AZa5Z2Hwoc3YXSO7t5DQf/wBFa6sLqDOjAA7OEa7yTzseQ5XHXwqkxmKLnoOn860Xa2ckqvC92I89B8DWXdDYmxsDYmxsD0J5V0Y9dWdbehMTZarGks8piWS+7VY95I4B1bIWQKuo1La3GlI2jswJGk0cu9ikLKGyGNlkUXaN4yTY2INwSDWnXBDaWEQRFflOGW27JAzLZVIF9LNkQg8AdDa9ZabGSblMKUyiOV3IysJDIwy5WU8COFrX91Rw5Zy33T1XwSZGHGPy/wC7Vfx4NpGyjzJ5AVQuhV0VgVI4hgQR3m4g6iuiYGARYcEjvSAyMeiD1fsF/bVMkq1RsDKbQZYe6o73X8T/ACqrw2GknkWNBmdjpfgOZJPICnMZIWYseJNTOzm0RhcSGkBCkFHuDdVJDZgtrmxUcuF7UTco4246uh5MRFsuBnEIxZ3hYIp+TnctITlC73eZgC1hnyW58Kq54WR2RhZkZlYdGUkEe8Vo+0GxWwc0eKjAkw5kSSNr5kDB8wjcg8CRo3Aggcb1QYqR5WkmKk5nZnYKcql2JAJ4KLmwua3Dkcknelf0kS9l7JeSKae4WOFHux/acr3Y16nUeVxxvRbIHcbzq+xkRTZuHiT/AN1ZsRJ9VIi5+/H7hULsThBK9iLqpLv9VdftNh7alDK580n70voFuOLs7Ku8k8wDyHU/yqnxuLLaDRenXzrSdrsRfKBpmuxHgNB+NZRkNibGw4mxsPM8qtj11ZZvQlw7LAiE00m6jckR2j3kkhHEqmZQFH0iw+0UnHbNVYlnil3sRfdkmMxukuXPkZMzC2XXMGIPDiK0mBwy7RwawIwXE4de4hNg6qMotf6QA1/ZYC9gRfMz4qRImwbJlyzmR7gh8+QIFIPIDXxv0qOLLOTaejT2+CT3IUaFiFUEkkAAakkmwAHUk1ebW7MNAsVpUkleRYmiQfq5XUMi5ye9cEchxHWnOxGBLY5FdWUxhnyspUgiwW4PD1wfdV3sNxNioC/7cmKx7eCWEGG926J8iKzNxEozqOyV/swyG2NnNhpmhdlZlCZit7AsgbLc8bZhURae2ji99NJKTfeSOwv0ZiVHsFh7KZSuqF8q5tzUTsBxrd+h06Yz68XwkrCYPjW59Dx0xn14vg9Qz9rEzdp0Ymkk0CaSTXCcgd6FIvQoAlilA02DSgaDSi7f/wB3Yr+H/wB1rmfYc9yQfSyj2ZxXS+35/R2J/hj761yvsjPlHmfxuPtArpxdjL4SV20FpvKNB7QCT9pqt7ULlnMQ0SJUWMcspRWLDqWJJJ5+yrvtVGCc3U394B+NU3/kI3RY8QjNkAWOWMgSIt/UIbR0Fzx1FUTekkrr/rOrwVWExbxOskTFHQ3VhyP4g8COYJFbvbmCXGS4HFL8y8yK8hU3KqkYlUryLA90HxW/C1ZiOHAL3nlxEo5RpGsZPg0jHh9Wxp2ftXIcSk4jRUjQxxwi+VYzoQD9LRdbW7q6WFqlnjPK1LGqavfTxsJpZSSyl5FZmLEm5ZjcnvNxrpHHDuTywwUeZjyj4/ZXPMbiEeZWSIRKQO4GLa3a5uevurd7OmzQsh5KL+S3Pwqkr5VaoyO5m9mLZcRIP1kcN06qS6qzjoQCdeV71QtV3JiGgmzoRcE6EXVlb1lYc1I5f0ptxg5DcmXDnmoUSx355NQwHgeFMpOMnKrT9ijLf0ebQJaTBSDPDLG5yMbhSBdrDkGF7+IB41UbSwJgw5tK2WTEzIEv3SkLugZurXQeHDmKkwbYw+EVxhFkeZ1ynETBQEU8dzGuoN7HvHiBxAtUPD7cAgWCWBJgjMyMzOLFmZiWsbtqzcx+Nc8oZPU54LR1p/sRUXXaHFBMHhVHryYRVBH7EeRHk/3skQ8kbrUPsOxG98UI97L/ACqNP2i3uH3M2HjdkWQQSqTHuQw9UIoswACgDoove16PsnLluetwfbVMeNwxtMVblp20W0qjpEoPmWZv+1VPaRcrRxroiwxMg5EugZpPEsb6+AHKr7tUgbv9bG32fEGqFdoIyCHEIzqn6t4yBLGCblRm0ZOOh4cuVmV0mldeCvgqIZ2RldGKOpurqbFSOYNbzb2HGOXAYi27lmIV2XkFSSRiOpBja31qzS4fAC7PPiHHKNIlRj4GRiQPYKcxnah2nikjjWOOAFYYATlVSpQ5jzbKbXtpYacbpnU8rTxqmr308bCaWT+xshbHYgmQ33M1pH1NlkQKzW6ADQdNKd7J/PvjmhXL/ZRDh1JPzaMN3GCeQARSf9Rqqg7TmKYSwYeKM5iXvd2kB1ZS59Vb2NlA1UcbWpZ7TqiTR4bCRYdZoyhKs7OL6E5zyClgFAABN9eFTeHK03y6tJfqhWScDh8NCWMsatCqsBLKCXxMgIH9mjJssY73e1uApuL6ZkWvoLDkL3sOQvz86vMH2jVo91jIziEHqPpvUNraMbX053v1uNBR6X0va5te17cr20vVuGxzjKXPv/Pocl4Tn5VuPRAdMX9eL4PWIwXPyrbeiL/F/Xi+D0/EdrJZu06ITRE0V6K9cJyB0KTR0ASQaUDTYpV6DSi7fn9HYn6g++tcl2B+rPnXV/SAf0difqL/AMiVyns/+rNdWHtL4S5kYTRlf21HDqOVvzzrOHDFgxuoC2BLuqDMblVGYi7HK2g6GrKRipuONRWxBGbLbvalWVHFxezAMDYi5sRqLmq/lHtOkjvsiYAEpYHLZmIVbGLfZsx0yhLkm9ha3HSmZ9nuil3yqo1DM6BXuocbo3+cupDadRzNqebGyfTv6vEKQcsW5AIIsRu+7Y6Ecb03NjZGVlZgyn9lkQqtlyDdqVtFZbL3LaAdBWJ5vgVxYxNh2jlVGsGFri4OU3OhsTYjpyrVQYjIQeWgPlzrKSzs8qs5u2lzYAm19WsNT4nU1pZhoPIUzt7mR3GNvQgEONVYcarZNmyXZQoZlQuyKys6qCo7yKSQ3fXTjx6G0yaTQqdRy8DUfE4pze7eshRiFQF1JU99gLue4upJOnHU1n5pVEfUak2TKCwyjMue6BlLkRsVkZUvdlBBFwOR6GzbbNcMykxgp65MsdozmyZZGzWVs3dtxv5Gzsm0JTmJc3csSwChu+2ZwrgZlVjqVBAOumppt8fJmLXW7eveKKzksGzOuWztmAbMQTfnQnm+BHFkbEwNGSrjK1n0Nrgq7xsDbmGjceyrPs96rVXzYx2BzEMe/wB5kQuc5dmvIVzatI7ceJvVj2d9VvzzprlX5C+S9DiWMofXA08RWc+Ss2b1QFtmZ2VFFzZRdiNSeXgehqxlJBuNCKjNiSCxW3etmVlR1NtQcrgi4Ot7XFKlKPaVIv8A4qawbIQrCMgkgAiRGkU5jp6qMTr3ba2pEmzZFGZsgSwKuZIwj5gxXIxNmJyPoPom9qc+WyC1nOgjHAHSJGRAbjUBXYa8QTe9IfHSEEFgV0spSMouUELu4yuWOwZrFQPWPU0Xm+BXFjcmzpAMxUWAuwDoSnzbTAOoN1JjRmAPS3HShhtnySBWUDK8m6UllAMhFwup0vwB4E6caM7Ql0GYEDkUQ5vmzEN5dfnCI2ZO9fQkc6MbUmACiQhVZWVFCrGGWTeqwjAyhg3O17acNK28/wAC6gm2c6IZDlyhylwwPfFrgW6XqOtKfFMy5CQRmZhdUuGa2YhrXF7DQG2lIWqw5q/I1E7Bc/Ktr6JD/wCr+vF8HrF4Pn5VsvRN/i/rxfB6hxHaxM3adCvRE0V6STXCcgq9Cm70KAJoNKBpq9KBoNKL0gH9HYn6i/8AIlcs7Oj5s11H0gH9HYj6qf8AIlcw7ND5s11Yew6MWzH8QtV8sZq8MF6amgC8bVssqR0RKyBAdGFvGpLbNFIjmVmsDp15VdvLDGvzYLBbZna1rnoOIFQlxKWxWzHYyHJMB5fjWlkHdHkKodszZ8SCDfRfgfCtGUuB5CumMripEHuypxCVFCEHh7KvvklQsU6pzHP2kcvE+VTlmSHiNxYRW4celJk2ZU/ZW6N3lJsBoo4k+JvoKlS40KSoGQ9NPw41CXFVsVsy+NwBVSegNSuzXqt+edT9sYwGFxqe7qWtx/dH586hdmB3W/POujDleSNsjk3JmIWq2aM1eNBem5YAOP58utbLLQRKqBL6MPb/ADqU2zhypAmUtlHv5Dz/ACaujJDGncDOQAXc2tc9B7OVQlxCWxVOjPy7M8DUKXAMOGtan5eDrmJHLLbj9mn5vUPFYi+pXzI0955nzpY8a09UbSluZgrRrU/FSRsbcG6gfG1Q3jIt0IuCOBB4EV6GLNHJsSlCiZg+flWx9FH+K+vF916xuD5+VbH0Vf4r68X3XqfEdrI5u03xNJJoiaTeuE4xV6OkXoUGkwNSgaaBpQNBpRekA/o7EfVT/lSub9l1uh866L6QP7vxHkn/ACpXP+yS9z210Y/8bLYti6nGVdBc3AHmaze0pGIJ1Ivx5Hx8r8B4Xq7xc9i3SxA8Gtoftqox0ZdAF1y65eZFtbdSNa45u2dCZWbPbNIFvrZso6sFJAq2jxy6i91J0TLry7p8NAOv2VmpNDccudGmLe9yxPnSOI0ZE7aMeXEKOZCk+Zvp8K2GGj0HkKxDSF5lJ/d+Fbm9o/ZXc3WKP6Ee5D2lMRcDhe1up6eXP3VmMc5DG97+PHw05eXKtDNNci+hAN/raXPuH2VQbVhIYsdQxJB5Hw8x0ribt6m2S8DKBErX9YnvcbMrg5T5gD/d41YQSLKQDwXVmtbgDoPfz/CskszL6rEX4gVLwmOZQdeX28qVxHjIsNt7RVA0MfPR2PHj6g6AW16nwp7sqvdP551mxEWuempPtrU9kF7p8/xrt4fTGxJvUvpRlUnnp9tZ7acjHMeI5nkf/jfgOdXWLnsx6cPI8QffVRi4y6BV4jXLzOmtupvc1zTk2wT0KnAteVVvxJt4mxKj2mw9tW0WNAvroQO7bUHKFtfkNL+ZrNzaGguLe+rE+dI4jRkayYxxpvH43JyjS5JJVPAHn0sfCsvtHaryt9gAFgByCjkKPaOJZ7DoPtP5FNbrdi/7Z4fuA8/rH7OPSsURnIjyEjuDVjofP6NbWHZIMCRn1goAP738r/ZWQwCWkQnTvDXoeR8q6VG1k76kEaGw4EaGw99dOF8rNg7uzGYdCpYHiLg+ytd6LOGK+vH91qptsYVkmOZcpZQQPDhr46e+9XHov4Yr68f3Wrryu4Wc2fY3ZNIvQJpBNcZxi70KRehQaSwaUDTSmlA0AUvbw/o/EfVT/lSsD2aNogfE1t/SA5Gz5rc90PYZkvWG2NpCPEmurErxv9nRi7SwxcRJNhe+o56joOfkNedVc0TWzLc217puRrx08edWK4sWytw+B6io+PUt342GbrfK3mDwJ/Nq5MmNplkVOImjk/WIc/8AmR2BP1k4MfG4qulwqg92QH6wKn3GrTEbWYXEsMUh6yR2cf64mW/tBpEe3AOGHT/c5FSdjpIg4ZfnV56/hW2IzKVrLNOZcQjFQtwmg4Duir95rG4r0HC8aXwI9xjExk68L8+V+ev4cvtqvlkeK4ZQVbirC6t0Pn4g1cnEIwIJsToRa4PQkdaq55ZYr5LFDyskiEeKPe32eyuKUGmairxMELXZc0f7rDOvscWPvFRVgt+2p8j+FWD7YW9/ksIP7m8S/mM7D3U8vaJh6kCDzufjU9R0okBsI5QlUbIupYggHxueP9auuzBtGT41FxGPnmjcuAEC8ALcWUDjfryqTsLSH/Ua7uHT9N/sSVeC1xcZJ0/at7SOnU8dOPS9VM0LEXXW3IakW5+V+dWKYsWytqKZx65+8jAt1vlbTmG4E+fu51z5MbTMRUT4hJNJUJb/ADEsH/1rwc+Oh86rpsKoPdkB+sCh+3T7atMRtV10liik6b2MBh5PGyk+29NxbbC8MOn+57VJ2OkiDFCb90Z25ADNy6DjUv8A8O4GaTQnXKT3j1LfRHiakr2hmbupGi+QP4GpeE2TicQe8SRfwA87DQ/GsVg6IGzdmCRxGNeHeHAags3kFuPEkda6nhEBIKRm97ljr3uIt5X4+NR9g9nEhW57zc78/Dxq9xBWNCxOVVGpPIDWrwjRidGC7WYcidA1sxS59pa1/dR+jYWGJ/iJ91qYxeJM85kPAmyg8lGgH561L7AizYsdJV+DV1T/AMZLM7ia4miJoiaTeuQ5BV6FIvR0GEoGlA1YZqPNWm0Y30gn+wS+cX/MlYTBtlgTxzfGuiek1v0dL9aH/nSucRFd0isXBy93IuYli3ArcXuOldmDs+zpw7DE+IqN8vZeenTiPdUrE4eH9me5/wAtdzI/DXRZRc8dADw1tVNNMLnLfLyva9uptV+RSK868FkuIjfQqfiPcb0/h8HBm9RmPQIfhwqhJHj7DalpMRpc28z+HH21J8Mh1kXkvXQDGKAhQDJ3Ta6/NrobaVIxM+pqt2a951PCyj7IwKnlYWsWlZF4M7iNVVtM1izjPxJyjW1utUSqkLauyDLiTyNJG0uAe5+PvpvHKiC4kLk8CAmS+hbvq7A2BtbQ94E24GvMl6HijIznRcLFC+pBHsufeKstnYSEWIgZh9JsqqOl2dhWTU24E++pMGOZWzcSOpJ/HT2VJ8MikckfJuNtBVwcwVUGiermaw3qcWsFU+AvVJs5rQL4s1QZtvSyxtEcoUgXAHR1I4k9KmYMrukVywvfLkXMcxYAd24vz0BvwpoQ5FQspJy0Gp8RUX5cy8Dp+eVSpcPEQLT9/nGNy730sABKCSSSMoF+7w1qmllFzlJy8ibAnTU2HC5uba24XPGqcikK5oslxUb6FT+Hu1p+DB4e/qsx6BTVCxB6+zSlJMRoCfefwqT4dDrIvJvtmQRrwhVLcpGAI81TMb+Fq1mzZBxKnwAUIP8Abe59up6VybB7dkiACBdOFwf50eJ7S4lwVMrBToQtlFumnKk6ZjPJCjrO0e1UEPrsAQLhBZmPTQc/Hh41i9q9qXxJt6qDgt+Pi3U/CsMZTT+HxNqtHAokudM2mzHBYedXXZGO0uL0/wDdT7prJ7ExQzLrzre9hG+cxh//AGx/cNSzKosll2ZZGkmry9DNXEcxRUKvM1CgBOahmpF6ANaaZP0o7SjjwRjbVpXTIvXI4c+zu1y/ZuIZpoieTCw6VE27tmTFzvM/E3CgnRF5KvTT31FixDqQQbEcCONehihyxLR0VG+k2RiUiidx3hl+UATBnRSCvzsIFkuxUaE2tY86xCxVc4nthipEKMy94MC4jjDkOQzXdUDalVJ1FyBe9qpw/wCbGq40/JsV7hiOj3dIMnj9n9aKTE5Qcp1Ol+Fhztr5fbTNpDEl8XlOVOIADHobAED3VddmcJNKoCEBA85lZ5N2i3iiWMvJYkd4jQAk66EXrIq5HC1W+xtv4jDEmNhYlSVZVZcym6tZlNmBA1GulTadaCtuiy7UYKWNgkoItJKU7+cGIrCUKv8AtKddePHpVGI6lbS2xLiGDSEd1cqqqhVUcbKqgKNegqLn8fs/rVI3WpsUHu6G7pIkH0vs/rQLDqfd/WttDD0ZVAWbhaw8TcED7KdwGIZ5ob6ASxacgN4tVmIxBZtOA9UE8B4eP9aEczixBAI1BHIjgQaTzYtm+w+ycUIYpG9cPCZlEwMixNISWeC1lUqyc7jiQNb4lYtKun7Y4pkKFl1BBcJGH7yqrd8IGuVUC4N9B0tVKH/NjWY78mRQrd0e7pBk8fs/rR5x1+z+tUtDh7ugYxSC3ifdRZ/E+4VlgL3dEY6Tn/ePuH86S0jfSH+3+tFmD8DlTcG1dQ9Gu1ldZEawlJBP7yjQEe+3u6iuQtim6g+z+tScJtOaI7yNgGXUHUew9R4VPJBTVCy1VHo69Fem4mJUE8bC/nbWlV5hAVejpFCsARmoA01moZqY0877QwMkTZZI2jewOVwQbE2BAPEXB1HSjkwcqZs8TrkKh7owCFhdQ3Qkdetd9xODikZXeNHZDdGZVZkP7pIuOA4UMThY5AVdFZWIJVlBBIIIJB48B7q6uo+B+c4HNh5EjSVkZY5L5HIsr242P5vTmLwE0QQyRMm8GZMwsWB0GnEHwOvDTWu9TQo4yuisoIIVlBF19U2OmlHPAjlS6K2Rg65gDlcXsy34MLnXxo6h+wc7OC47Zs0LKksTozAFVI1YHQZQOJvpbjfTjSsZsqaNzFJE6uEL5bXOS1y2l7qADrysb8DXeJsMjsjsis0ZJRiAShIsSp5XFL3K5g5Vc4UqGsMwViCVB4gEgaeAo6h+wc552jgchiqlggBcgXChmCrc+JIFSYcFK0ghWJzI1rJlOYggEG3Sxvfhau94bAQxhljijQMbsERVDN1IA1NOJhoxIZQiiQqFL2GYqDcLfpc8KOo+A5zgWDwE0zmKOJ3cAllA1UDjmv6vt8qGC2dNMXEcTuYwS4VdUAve4PPQ93ibGw0rv6QoGZwihntnYABmy6LmPE28aKDDohYoiqXbM5UAZmsBma3E6DWjqX7B6jOA4PAyyq7xxs6xLmkZRcKvUn7bDW1zwBpeG2fLJG8qRsyRkB2UXCk8L/nS4vau84TCxxArGioCzMQosCzG7E9STSsJh0iQRxoqIOCoAqi+psBQ+I+DfUPO88JUKxBAZcyk6BluRmHUXBF/CnZMHMmbPE65Ahe6kZBIAYy30c1xx613+bZ0LhA0MbCO27BRSEta2S47vAcOgpzEYVJFZXRWV/XBAIb63WjqPgznPPsuGkWNJmRhG5IRyLKxAuQDz/Gx6Gy8XgpYljeWNkWUFo2YWDqLaj3g69b16Bkw0bLu2RWTTuFQV04d0i2lDE4eOQAOiuFYMoZQQGX1WF+BHWjqX7Bzs4BjtnTQlRLE8ZdQyBhYsp6Drw04i4uNaVitmzROsckTo7hSqEd5s2i2HM30txvpxrvmJwkchRnRWMbZ4yRfK1iMw8bH4dKVJh0ZldkUul8jEAlcws2U8r0dS/YPUOD4jYuISYYdoXEpNlS183ipGhHiDYc7Wpo7Ml33yfdNvs2Xd271+Pla2t+Ftb2rvzQqWEmUZ1DKGtqFYgsAehKr7hSVw6BzLkXeFQpewzFQSQt+Nrk1nUv2D1GcAw+zpZJjh0idpgWBjAAZcvrZr6ADqdNR1pnC7PmmMgjikcwgmVQusYBsQwtcNcHu8dDpoa9E2F81hc6E21I6E0FsLkAAnU25nqetHUv2M52eccLhGdHkVSyRBTI49VAxstz4k/E8AakSbOl/ViKQu0YdVCMWKNoHCgXyk869BQ4dEBCIqgkkhVABJ4kgcSacsL3sL2tfnbpfpR1L9jVMXHwHkPhSr03moZq5SY5ehTeajooBigaKhTGgNJNChQAKOhQrQDFHQoVgBihQoUAHRUKFBgKMUKFBoYoxQoUGMOiFChQAdChQoNCoUKFYYChQoUGgNFQoUAChQoVgB0KFCgw//9k=",
  54:"https://assets.winni.in/product/primary/2025/1/101772.jpeg?dpr=1&w=500",
  55:"https://www.snackspause.com/cdn/shop/products/image_c265338f-aa28-4eec-a740-cc873ad51391.jpg?v=1671685509",
  56:"https://m.media-amazon.com/images/I/61ecGIK3c8L._AC_UF350,350_QL80_.jpg",
  57:"https://blacktulipflowers.in/wp-content/uploads/2022/10/Ferrero-Rocher-Chocolate-24-Pcs-1.png",
  58:"https://tangyshopindia.com/cdn/shop/files/munch-chocolate-classic-tangyshop-tangy-shop-974438.jpg?v=1736381130&width=416",
  // Juices
  59:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&q=80",
  60:"https://cpimg.tistatic.com/06581012/b/4/500-ML-Apple-Juice.jpg",
  61:"https://abhisristores.com/wp-content/uploads/2025/05/8-7.webp",
  62:"https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2016/05/Pudina-Aam-Panna-H1-1.jpg?fit=600%2C900&ssl=1",
  63:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80",
  64:"https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&q=80",
  65:"https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=300&q=80",
  // Ice Creams
  66:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&q=80",
  67:"https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&q=80",
  68:"https://images.unsplash.com/photo-1560008581-09826d1de69e?w=300&q=80",
  69:"https://images.unsplash.com/photo-1580915411954-282cb1b0d780?w=300&q=80",
  70:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=300&q=80",
  71:"https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&q=80",
  // Tea & Coffee
  72:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&q=80",
  73:"https://images.unsplash.com/photo-1610889556528-9a770e32642f?w=300&q=80",
  74:"https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&q=80",
  75:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
  76:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&q=80",
  77:"https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=300&q=80",
  78:"https://images.unsplash.com/photo-1515442261605-65987783cb6a?w=300&q=80",
  // Sauces & Spreads
  79:"https://api.americangarden.us/wp-content/uploads/2024/02/Tomato-500-x-380-pxl.jpg",
  80:"https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300&q=80",
  81:"https://images.unsplash.com/photo-1505253304499-671c55fb57fe?w=300&q=80",
  82:"https://jindalcocoa.com/cdn/shop/files/Untitled-13_1.jpg?v=1717758566",
  83:"https://images.unsplash.com/photo-1574484284002-952d92456975?w=300&q=80",
  84:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=80",
  85:"https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=300&q=80",
  // Chicken, Meat & Fish
  86:"https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=300&q=80",
  87:"https://images.unsplash.com/photo-1587593810167-a84920ea0781?w=300&q=80",
  88:"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=300&q=80",
  89:"https://images.unsplash.com/photo-1432139509613-5c4255815697?w=300&q=80",
  90:"https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=300&q=80",
  91:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&q=80",
  92:"https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=300&q=80"
};

const catLabels = {
  dairy:"Dairy & Eggs",
  fruits:"Fruits",
  vegetables:"Vegetables",
  snacks:"Snacks",
  choco:"Chocolates",
  juices:"Juices & Drinks",
  icecream:"Ice Creams",
  teacoffee:"Tea & Coffee",
  sauces:"Sauces & Spreads",
  meat:"Chicken, Meat & Fish"
};

/* ================= PRODUCTS ================= */
let products = [
{id:1,name:"Brown Bread",price:40,cat:"dairy"},
{id:2,name:"White Bread",price:35,cat:"dairy"},
{id:3,name:"Whole Wheat Bread",price:50,cat:"dairy"},
{id:4,name:"Cow Milk",price:30,cat:"dairy"},
{id:5,name:"Paneer",price:80,cat:"dairy"},
{id:6,name:"Cheese",price:60,cat:"dairy"},
{id:7,name:"Ghee",price:120,cat:"dairy"},
{id:8,name:"Butter",price:55,cat:"dairy"},
{id:9,name:"Eggs",price:8,cat:"dairy"},
{id:10,name:"Buffalo Milk",price:40,cat:"dairy"},
{id:11,name:"Full Cream Milk",price:35,cat:"dairy"},
{id:12,name:"Toned Milk",price:30,cat:"dairy"},
{id:13,name:"Lactose Free Milk",price:60,cat:"dairy"},
{id:14,name:"Apple",price:120,cat:"fruits"},
{id:15,name:"Green Grapes",price:90,cat:"fruits"},
{id:16,name:"Mango",price:150,cat:"fruits"},
{id:17,name:"Watermelon",price:50,cat:"fruits"},
{id:18,name:"Pineapple",price:70,cat:"fruits"},
{id:19,name:"Blue Grapes",price:100,cat:"fruits"},
{id:20,name:"Banana",price:40,cat:"fruits"},
{id:21,name:"Strawberries",price:160,cat:"fruits"},
{id:22,name:"Litchi",price:140,cat:"fruits"},
{id:23,name:"Oranges",price:60,cat:"fruits"},
{id:24,name:"Green Apple",price:130,cat:"fruits"},
{id:25,name:"Kiwi",price:200,cat:"fruits"},
{id:26,name:"Potato (Aloo)",price:20,cat:"vegetables"},
{id:27,name:"Onion (Pyaaz)",price:25,cat:"vegetables"},
{id:28,name:"Tomato",price:30,cat:"vegetables"},
{id:29,name:"Okra (Bhindi)",price:40,cat:"vegetables"},
{id:30,name:"Cauliflower",price:35,cat:"vegetables"},
{id:31,name:"Cabbage",price:30,cat:"vegetables"},
{id:32,name:"Carrot",price:45,cat:"vegetables"},
{id:33,name:"Spinach",price:25,cat:"vegetables"},
{id:34,name:"Bottle Gourd",price:50,cat:"vegetables"},
{id:35,name:"Green Peas",price:60,cat:"vegetables"},
{id:36,name:"Eggplant",price:40,cat:"vegetables"},
{id:37,name:"Bitter Gourd",price:55,cat:"vegetables"},
{id:38,name:"Radish",price:30,cat:"vegetables"},
{id:39,name:"Capsicum",price:45,cat:"vegetables"},
{id:40,name:"Ginger",price:80,cat:"vegetables"},
{id:41,name:"Garlic",price:90,cat:"vegetables"},
{id:42,name:"Green Chilli",price:20,cat:"vegetables"},
{id:43,name:"Coriander",price:15,cat:"vegetables"},
{id:44,name:"Pumpkin",price:35,cat:"vegetables"},
{id:45,name:"Lemon",price:10,cat:"vegetables"},
{id:46,name:"Lays Chips",price:20,cat:"snacks"},
{id:47,name:"Kurkure",price:20,cat:"snacks"},
{id:48,name:"Aloo Bhujia",price:30,cat:"snacks"},
{id:49,name:"Pringles",price:110,cat:"snacks"},
{id:50,name:"Doritos",price:90,cat:"snacks"},
{id:51,name:"Popcorn",price:40,cat:"snacks"},
{id:52,name:"Corn Rings",price:25,cat:"snacks"},
{id:53,name:"Dairy Milk",price:40,cat:"choco"},
{id:54,name:"KitKat",price:20,cat:"choco"},
{id:55,name:"5 Star",price:25,cat:"choco"},
{id:56,name:"Snickers",price:50,cat:"choco"},
{id:57,name:"Ferrero Rocher",price:120,cat:"choco"},
{id:58,name:"Munch",price:20,cat:"choco"},
// NEW CATEGORIES
{id:59,name:"Real Orange Juice",price:90,cat:"juices"},
{id:60,name:"Tropicana Apple Juice",price:85,cat:"juices"},
{id:61,name:"Maaza Mango Drink",price:40,cat:"juices"},
{id:62,name:"Paper Boat Aam Panna",price:30,cat:"juices"},
{id:63,name:"Raw Pressery Pomegranate",price:120,cat:"juices"},
{id:64,name:"Frooti",price:20,cat:"juices"},
{id:65,name:"Coconut Water",price:50,cat:"juices"},
{id:66,name:"Amul Vanilla Cone",price:30,cat:"icecream"},
{id:67,name:"Kwality Walls Cornetto",price:50,cat:"icecream"},
{id:68,name:"Magnum Almond Bar",price:120,cat:"icecream"},
{id:69,name:"Baskin Robbins Chocolate",price:90,cat:"icecream"},
{id:70,name:"Amul Chocobar",price:20,cat:"icecream"},
{id:71,name:"Naturals Mango Scoop",price:100,cat:"icecream"},
{id:72,name:"Tata Tea Premium",price:120,cat:"teacoffee"},
{id:73,name:"Red Label Tea",price:140,cat:"teacoffee"},
{id:74,name:"Nescafé Classic",price:180,cat:"teacoffee"},
{id:75,name:"Bru Instant Coffee",price:160,cat:"teacoffee"},
{id:76,name:"Green Tea (Tetley)",price:130,cat:"teacoffee"},
{id:77,name:"Tulsi Ginger Tea",price:90,cat:"teacoffee"},
{id:78,name:"Cold Coffee Mix",price:75,cat:"teacoffee"},
{id:79,name:"Kissan Tomato Ketchup",price:90,cat:"sauces"},
{id:80,name:"Maggi Hot & Sweet Sauce",price:80,cat:"sauces"},
{id:81,name:"Peanut Butter",price:180,cat:"sauces"},
{id:82,name:"Nutella Hazelnut Spread",price:350,cat:"sauces"},
{id:83,name:"Britannia Mixed Fruit Jam",price:75,cat:"sauces"},
{id:84,name:"Schezwan Chutney",price:60,cat:"sauces"},
{id:85,name:"Mayonnaise",price:95,cat:"sauces"},
{id:86,name:"Chicken Breast (500g)",price:160,cat:"meat"},
{id:87,name:"Chicken Curry Cut (1kg)",price:280,cat:"meat"},
{id:88,name:"Boneless Mutton (500g)",price:380,cat:"meat"},
{id:89,name:"Rohu Fish (500g)",price:140,cat:"meat"},
{id:90,name:"Prawns (250g)",price:220,cat:"meat"},
{id:91,name:"Salmon Fillet (200g)",price:320,cat:"meat"},
{id:92,name:"Chicken Keema (500g)",price:190,cat:"meat"}
];

/* ================= INIT ================= */
window.onload = function(){
  if(document.getElementById("dairyBox")){ renderAll(); updateCart(); }
  if(document.getElementById("cartBox")){ loadCart(); }
};

/* ================= RENDER ================= */
function renderAll(){
  render("dairy","dairyBox");
  render("fruits","fruitsBox");
  render("vegetables","vegBox");
  render("snacks","snackBox");
  render("choco","chocoBox");
  render("juices","juicesBox");
  render("icecream","icecreamBox");
  render("teacoffee","teacoffeeBox");
  render("sauces","saucesBox");
  render("meat","meatBox");
}

function render(cat, boxId){
  let box = document.getElementById(boxId);
  if(!box) return;
  let search = (document.getElementById("search")||{}).value?.toLowerCase()||"";
  box.innerHTML = "";
  products
    .filter(p=>p.cat===cat)
    .filter(p=>p.name.toLowerCase().includes(search))
    .forEach(p=>{
      const img = productImages[p.id] || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80";
      box.innerHTML += `
      <div class="fc-card" onclick="openModal(${p.id})">
        <div class="card-img-wrap">
          <img src="${img}" alt="${p.name}" loading="lazy">
        </div>
        <div class="card-name">${p.name}</div>
        <div class="card-price">₹${p.price}</div>
        <button class="card-quick" onclick="quickAdd(event,${p.id})">+</button>
      </div>`;
    });
}

/* ================= QUICK ADD ================= */
function quickAdd(e, id){
  e.stopPropagation();
  let cart = getCart();
  let item = cart.find(i=>i.id===id);
  const p = products.find(p=>p.id===id);
  if(item) item.qty++;
  else cart.push({...p, qty:1});
  setCart(cart);
  updateCart();
  showToast(`${p.name} added ✓`);
}

/* ================= MODAL ================= */
function openModal(id){
  selected = products.find(p=>p.id===id);
  modalCount = 1;
  const img = productImages[id] || "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&q=80";
  document.getElementById("modal").classList.add("open");
  document.getElementById("mName").innerText = selected.name;
  document.getElementById("mPrice").innerText = "₹"+selected.price;
  document.getElementById("mQty").innerText = modalCount;
  document.getElementById("mCat").innerText = catLabels[selected.cat]||selected.cat;
  document.getElementById("mImg").src = img;
  document.getElementById("mImg").alt = selected.name;
}
function closeModal(){
  document.getElementById("modal").classList.remove("open");
}
function modalQty(v){
  modalCount = Math.max(1, modalCount+v);
  document.getElementById("mQty").innerText = modalCount;
}
function addFromModal(){
  let cart = getCart();
  let item = cart.find(i=>i.id===selected.id);
  if(item) item.qty += modalCount;
  else cart.push({...selected, qty:modalCount});
  setCart(cart);
  updateCart();
  closeModal();
  showToast(`${selected.name} added to cart ✓`);
}

/* ================= CART ================= */
function updateCart(){
  let count = getCart().reduce((a,b)=>a+b.qty,0);
  let el = document.getElementById("cartCount");
  if(el) el.innerText = count;
}

function loadCart(){
  let box = document.getElementById("cartBox");
  if(!box) return;
  let cart = getCart();
  let total = 0;
  box.innerHTML = "";
  if(cart.length === 0){
    box.innerHTML = `<div style="text-align:center;padding:60px 20px;color:var(--text-muted)">
      <div style="font-size:3rem;margin-bottom:12px">🛒</div>
      <p style="font-size:1.1rem;font-weight:500">Your cart is empty</p>
      <button class="fc-btn fc-btn-cart" style="margin-top:16px" onclick="location.href='home.html'">Start Shopping →</button>
    </div>`;
    document.getElementById("total").innerText = 0;
    return;
  }
  cart.forEach(i=>{
    let it = i.price * i.qty;
    total += it;
    box.innerHTML += `
    <div class="cart-item">
      <div>
        <div class="cart-item-name">${i.name}</div>
        <div class="cart-item-meta">₹${i.price} × ${i.qty}</div>
      </div>
      <div class="cart-item-total">₹${it}</div>
    </div>`;
  });
  document.getElementById("total").innerText = total;
  document.getElementById("subtotal").innerText = "₹"+total;
  let summary = document.getElementById("cartSummary");
  if(summary) summary.style.display = "block";
}

/* ================= ORDER ================= */
function placeOrder(){
  localStorage.removeItem("cart");
  showToast("Order placed! 🎉 Thank you!");
  setTimeout(()=>{ window.location.href="home.html"; },1800);
}

/* ================= UTILS ================= */
function showToast(msg){
  let t = document.getElementById("toast");
  if(!t) return;
  t.innerText = msg;
  t.style.display = "block";
  setTimeout(()=>t.style.display="none",2200);
}
function logout(){ location.href="login.html"; }
