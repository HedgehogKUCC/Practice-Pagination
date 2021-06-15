const PAGINATION = {
    nowPage: 1,
    totalPage: 5,
};

const paginationGroup = document.getElementById('pagination__group');

init();

function init() {
    PAGINATION.nowPage = 1;
    if (PAGINATION.totalPage > 5) {
        // overFivePageRender();
        // overFivePageListener();
        alert('Bigger than five');
    } else {
        pageRender();
        pageListener();
    }
}

function pageRender() {
    const { totalPage } = PAGINATION;
    const { nowPage } = PAGINATION;
    const ary = [];
    let num = 1;

    while (num <= totalPage) {
        const classList = num === nowPage ? 'active' : '';
        ary.push({ val: num, class: classList });
        num += 1;
    }

    listRender(ary);
}

function listRender(ary) {
    paginationGroup.innerHTML = '';
    const FRAGMENT = document.createDocumentFragment();
    ary.forEach((el) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        li.setAttribute('data-val', el.val);
        li.setAttribute('class', 'pagination__item ' + el.class);
        a.setAttribute('href', 'javascript:;');
        // a.setAttribute('href', '/coupon.php?usablePage=' + el.val);
        a.innerText = el.val > 0 ? el.val : el.val === -1 ? '...' : '';
        li.appendChild(a);
        FRAGMENT.appendChild(li);
    });
    paginationGroup.appendChild(FRAGMENT);
}

function pageListener() {
    document.querySelectorAll('.pagination__item').forEach((el) => {
        el.addEventListener('click', () => {
            if (el.dataset.val > 0) {
                PAGINATION.nowPage = +el.dataset.val;
                pageRender();
                pageListener();
            }
        });
    });
}
