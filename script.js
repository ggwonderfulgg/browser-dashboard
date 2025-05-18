// 获取所有的分类标题
const categoryTitles = document.querySelectorAll('h2');

// 为每个标题添加点击事件
categoryTitles.forEach(title => {
    title.addEventListener('click', () => {
        const nextUl = title.nextElementSibling;
        
        // 如果该分类的ul已经展开，则折叠它
        if (nextUl.style.display === 'block') {
            nextUl.style.display = 'none';
        } else {
            // 否则展开它
            nextUl.style.display = 'block';
        }
    });
});
