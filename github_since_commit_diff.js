
function get_commit_hashes() {
    var commit_hashes = document.querySelectorAll('.timeline-commits tr.commit .commit-meta code a');
    return commit_hashes;
}

function get_last_commit_hash() {
    var commit_hashes = get_commit_hashes();
    return commit_hashes[commit_hashes.length - 1].innerHTML;
}

function decorate_commit_hashes() {
    var commit_hashes = get_commit_hashes();
    var last_commit_hash = get_last_commit_hash();
    var url = document.URL.match('https://github.com/[^/]+/[^/]+');
    [].forEach.call(commit_hashes, function(hash_anchor, index) {
        if (index === 0) {
            return;
        }
        
        var hash = commit_hashes[index - 1].innerHTML;
        var href = url + '/compare/' + hash + '...' + last_commit_hash;
        
        var diff_since_button = document.createElement('a');
        diff_since_button.href = href;
        diff_since_button.innerHTML = 'Diff since';
        
        hash_anchor.parentNode.previousElementSibling.appendChild(diff_since_button);
    });
}

window.setTimeout(function() {
    decorate_commit_hashes();
}, 1000);
