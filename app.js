document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);

    /**
     * modern syntax replacing onreadystatechange
     * fires only when request completed
     * @return void no return data
     */
    xhr.onload = function() {
        console.log(xhr.readyState);
        if (this.status === 200) {
            console.log(this.responseText);
            document.getElementById('output').innerHTML = this.responseText;
        }
    }

    /**
     * this fires while the request is in progress
     * @return void no return data
     */
    xhr.onprogress = function(){
      console.log('READYSTATE', this.readyState);
    }

    /**
     * old syntax
     * @return void no return data
     */
    // xhr.onreadystatechange = function() {
    //     console.log(this.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    /**
     * must call
     */
    xhr.send();
    /**
     *  HTTP status
     *  200 - OK
     *  403 - Forbidden
     *  404 - Not Found
     */

    /**
     *  Ready State values
     *  0 - request not initialized
     *  1 - server connection established
     *  2 - request received
     *  3 - processing request
     *  4 - request completed and response is ready
     */
}

document.getEle
