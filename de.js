l10n.translations.de = {
  logout: 'Abmelden',
  error: {
    a: 'Ein Fehler ist aufgetreten. Bitte',
    b: 'neu laden',
    c: 'Hier einige technische Details:'
  },
  sourceName: {
    gdrive: 'Google Drive',
    dropbox: 'Dropbox',
    facebook: 'Facebook',
    instagram: 'Instagram',
    vk: 'VK',
    box: 'Box',
    evernote: 'Evernote',
    skydrive: 'OneDrive',
    flickr: 'Flickr',
    huddle: 'Huddle'
  },
  login: {
    title: 'Hochladen einer Datei von %source',
    lineA: {
      gdrive: 'Holen Sie Dateien aus Ihrem Google-Konto.',
      dropbox: 'Holen Sie Dateien aus Ihrem Dropbox-Konto.',
      box: 'Holen Sie Dateien aus Ihrem Box-Konto.',
      evernote: 'Holen Sie Dateien aus Ihrem Evernote-Konto.',
      instagram: 'Holen Sie Ihre Fotos oder die Ihrer Freunde.',
      flickr: 'Holen Sie Ihre Fotos oder die Ihrer Freunde.',
      facebook: 'Holen Sie Bilder aus Ihren Alben oder denen Ihrer Freunde.',
      vk: 'Holen Sie Fotos und Dokumente aus Ihrem Konto.'
    },
    lineB: 'Wir machen es Ihnen einfach. Sie brauchen sich nur anzumelden.',
    button: 'Verbinden mit %source',
    note: 'Wir öffnen eine neue Seite für die Verbindung mit Ihrem %source-Konto.',
    cookieWarning: 'Sie haben in Ihrem Browser Cookies von Drittanbietern blockiert. Die Autorisierung benötigt Cookies von Drittanbietern zumindest für die <code>social.uploadcare.com</code> Domain.',
    cookieRetry: 'Ich habe das Speichern von Cookies erlaubt und möchte es erneut versuchen.'
  },
  pagination: {
    loading: 'Lädt weitere Items ...',
    loadMore: 'Mehr laden',
    failed: {
      a: 'Laden fehlgeschlagen.',
      b: 'Erneut versuchen'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Meine Fotos',
      myLikes: 'Meine Likes',
      myFollowings: 'Meine Followings',
      search: 'Suche'
    },
    search: {
      placeholder: 'Suche Fotos nach Hashtags',
      button: 'Suche'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Meine Dateien',
      starred: 'Favoriten'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Meine Alben',
      myFriends: 'Meine Freunde',
      likedPages: 'Seiten'
    }
  },
  vk: {
    menu: {
      myAlbums: 'Meine Alben',
      page: 'Profilbilder',
      withMe: 'Fotos mit mir',
      saved: 'Gespeicherte Fotos',
      myFriends: 'Meine Freunde',
      docs: 'Meine Dokumente'
    }
  },
  evernote: {
    menu: {
      allNotes: 'Alle Notizen',
      notebooks: 'Notizbücher',
      tags: 'Tags',
      search: 'Suche'
    },
    search: {
      placeholder: 'Suchnotizen',
      button: 'Suche'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Fotostream',
      myAlbums: 'Alben',
      myFavorites: 'Favoriten',
      follows: 'Followings'
    }
  },
  huddle: {
    menu: {
      workspaces: 'Workspaces'
    }
  },
  files: {
    one: '%n Datei',
    other: '%n Dateien'
  },
  list: {
    table: {
      title: 'Name',
      size: 'Größe'
    }
  }
};


l10n.date = function(d) {
  var months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun',
                'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez' ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
