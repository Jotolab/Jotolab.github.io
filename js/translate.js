var arrLang = {
    'en': {
        'home' : 'Home',
        'prod': 'Products',
        'about': 'About Us',
        'howto': 'How to ues',
        'contact': 'Contact Us',
        'arabic': 'Ar',
        'english': 'En',
        'search': 'Search',
        'headText': 'The Best Photo Printing in Middle East',
        'dis1': 'Text Description One',
        'dis2': 'Text Description Two',
        'dis3': 'Text Description Three',
        'dis4': 'Text Description Four',
        'dis5': 'Text Description Five',
        'bestapp': 'This is the best app',
        'reviews': 'Based on 80 000+ reviews',
        'aboutTitle': 'Hello World!',
        'aboutDes': 'sed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore etsed do eiusmod tempor incididunt ut labore et',
        'howTo': 'How to make an order!'
    },
    'ar': {
        'home' : 'الرئيسية',
        'prod': 'المنتجات',
        'about': 'من نحن',
        'howto' : 'كيفية الطلب',
        'contact' : 'إتصل بنا',
        'arabic': 'عربي',
        'english': 'إنجليزي',
        'search': 'إبحث',
        'headText': 'أفضل موقع لطباعة الصور في شرق الاوسط',
        'dis1': 'عرض المنتج الاول',
        'dis2': 'عرض المنتج الثاني',
        'dis3': 'عرض المنتج الثالث',
        'dis4': 'عرض المنتج الرابع',
        'dis5': 'عرض المنتج الخامس',
        'bestapp': 'أفضل تطبيق على الاطلاق',
        'reviews': ' إلى اكثر من ٨٠٠٠٠ تعليق',
        'aboutTitle': 'مرحبا!',
        'aboutDes': 'شسيشسيش شسيشسيششسيشسيششسيشسيششسيشسيش شسيشسيش شسيشسيش  شسيشسيششسيشسيش شسيشسيش شسيشسيش شسيشسيش شسيشسيش شسيشسيش شسيشسيش شسيشسيششسيشسيششسيشسيششسيشسيششسيشسيششسيشسيش شسيشسيش شسيشسيش شسيشسيش شسيشسيش شسيشسيش شسيشسيش شسيشسيششسيشسيش ',
        'howTo': 'كيف يتم الطلب!'
    }
};

$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');
        $('.lang').each(function (index, elemnt) {
            $(this).text(arrLang[lang][$(this).attr('data-key')]);
        });
    });
});
