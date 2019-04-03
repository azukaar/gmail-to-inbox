function onLoad() {
  if(!document.querySelector('.gb_Vd.gb_Tb.gb_ce')) {
    setTimeout(onLoad, 20);
  } else {
    document.querySelector('.gb_Vd.gb_Tb.gb_ce').innerHTML = 'Inbox';
  }
}

onLoad();