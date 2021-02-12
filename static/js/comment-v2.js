function hideWarning() {
    document.getElementById('no_go').style.display = 'none';
    }

    function showWarning () {
    document.getElementById('no_go').style.display = 'block';
    document.getElementById('no_go').innerHTML = '<strong>Warning:</strong> App will not work if local storage is disabled or unsupported.';
    console.warn('App will not work if local storage is disabled or unsupported.');
    } 

    function supportsLocalStorage () {
    return typeof localStorage !== 'undefined';
    }

    function getComments() {
    return JSON.parse(localStorage.getItem('comments')) || [];
    }

    function saveComment (comments, commentStr, action) {
    if (!commentStr && comments.indexOf(commentStr) < 0) {
        action(err);
    }
    
    action(undefined, commentStr);
    
    }

    function appendToStream(stream, str, index) {
    var li = document.createElement('LI');
    li.setAttribute('data-index', index);
    li.innerHTML = str;
    stream.appendChild(li);
    }

    function loadComments(stream) {
    var comments = getComments();
    if (comments) {
        for (var i = 0; i < comments.length; i++) {
        appendToStream(stream, comments[i], i);
        }    
    }
    }

    function clearComments(stream) {
    localStorage.removeItem('comments');
    stream.innerHTML = '';
    }

    if (supportsLocalStorage()) {
    initApp();
    } else {
    showWarning();
    }

    function initApp() {
    hideWarning();
    
    var commentForm = document.getElementById('comment-form'),
        commentList = document.getElementById('comment-stream'),
        // commentList1 = document.getElementById('comment-stream1'),
        commentInput = document.getElementById('comment-input'),
        commentInput1 = document.getElementById('comment-name'),
        removeAll = document.getElementById('remove-all');
    
    loadComments(commentList);
    
    removeAll.addEventListener('click', function() {
        clearComments(commentList);
    }, true);

    removeAll.addEventListener('click', function() {
        clearComments(commentList1);
    }, true);
    
    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var commStr1 = 'Name: ' + commentInput1.value,
            comments1 = getComments();
        
        saveComment(comments1, commStr1, function(err, value) {
        
        if (err) {
            return;
        }
        
        comments1.push(value);
        localStorage.setItem('comments', JSON.stringify(comments1));  
        appendToStream(commentList, commStr1);
        commentInput1.value = '';      
        });
        
    }, true);

    commentForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var commStr = 'Comment: ' + commentInput.value,
            comments = getComments();
        
        saveComment(comments, commStr, function(err, value) {
        
        if (err) {
            return;
        }
        
        comments.push(value);
        localStorage.setItem('comments', JSON.stringify(comments));  
        appendToStream(commentList, commStr);
        commentInput.value = '';      
        });
        
    }, true);
    
    }