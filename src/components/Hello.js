import React from 'react'

const Hello = () => {

  var window1 = window.open(
    'https://ngeducate.blogspot.com/2021/12/how-to-link-pan--with-lic-policy.html',
    '_blank'
  )
  var window2 = window.open(
    'https://ngeducate.blogspot.com/2021/12/different-ways-to-merge-arrays-in-javascript.html',
    '_blank'
  )

  var window3 = window.open(
    'https://ngeducate.blogspot.com/2021/12/how-to-install-specific-version-of-node-js-package.html',
    '_blank'
  )

  var window4 = window.open(
    'https://ngeducate.blogspot.com/2021/12/cron-expressions.html',
    '_blank'
  )
  var window5 = window.open(
    'https://ngeducate.blogspot.com/2021/12/spring-boot-cron-job-example-every-5.html',
    '_blank'
  )
  var window6 = window.open(
    'https://ngeducate.blogspot.com/2021/12/types-of-components-in-react-js.html',
    '_blank'
  )
  var window7 = window.open(
    'https://ngeducate.blogspot.com/2021/12/what-is-react-why-react-why-react-is-declarative.html',
    '_blank'
  )


  setTimeout(openWindows, 10000);
  setTimeout(closeWindows, 10000);
  setTimeout(refreshWindow, 15000);

  function openWindows() {
    window1.focus()
    window1.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window2.focus()
    window2.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window3.focus()
    window3.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window4.focus()
    window4.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window5.focus()
    window5.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window6.focus()
    window6.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });

    window7.focus()
    window7.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
  }

  function closeWindows() {
    window1.close()
    window2.close()
    window3.close()
    window4.close()
    window5.close()
    window6.close()
    window7.close()
  }

  function refreshWindow() {
    location.reload();
  }

  return (
    <div>
      <h1>Hello,</h1>

    </div>
  )
}
export default Hello