# Readicolous

## Key Features 
  <ul>
    <li>
      Create Groups to host a new Bookclub
    </li>
    <li>
      Post the book of the week to your group
    </li>
    <li>
      leave reviews on read books for other users to read
    </li>
    <li>
      view buying options for the book of the book (bookstores + ebooks)
    </li>
  </ul>

## How to use
search for readiculous on google or visit Readiculous.netlify.app.com  
NOT AVAILABLE YET!

  ## For Developers
  <p>our api will be publicly available for use for free, await further documentation upon api development completion :)</p>
    
### Authentication
<ul>

#### SIGN UP 
    METHOD: POST
    ENDPOINT: /auth
    Body: 
    {
        email: string,
        password: string,
        firstName: string,
        lastName: string
    }
    returns:
    {
        "message": "signed up successfully"
    }
<br>

#### LOG IN
    METHOD: POST
    ENDPOINT: /auth/login
    BODY: 
    {
        email: string,
        password: string
    }
    returns:
    {
        "message": "Logged in successfully",
        "userID": INTEGER ID FROM DATABASE
    }

#### DELETE ACCOUNT
    METHOD: DELETE
    ENDPOINT: /auth
    BODY:
    {
        id: INTEGER,
        password: string
    }
    returns:
    {
        "message": "User deleted"
    }

</ul>

### USER MANAGEMENT
<ul>

#### GET FULL USER INFO
    METHOD: GET
    ENDPOINT: /users/:id
    BODY: NONE
    returns:
    {
        "user": {
            "id": INTEGER,
            "email": string,
            "password": string,
            "first_name": string,
            "last_name": string,
            "bio": string | NULL
        },
        "clubs": [
            {
                "id": INTEGER,
                "name": string,
                "description": string,
                "genre_id": INTEGER,
                "owner_id": INTEGER,
                "discussion_id": INTEGER,
                "book_id": INTEGER (put 1 in it always)
            }
        ],
        "favorites": [],
        "reviews": [],
        "bookshelf": [
            {
                "user_id": INTEGER,
                "book_id": INTEGER
            }
        ]
    }

</ul>

### CLUB MANAGEMENT

<ul>

#### Create A Club
    METHOD: POST
    ENDPOINT: /club/create
    BODY: 
    {
        clubName: string
        description: string
        CreatorId: INTEGER
        genreId: INTEGER
    }
    returns:
    {
        "message": "Club created successfully"
    }

#### JOIN CLUB AS A MEMBER
    METHOD: POST
    ENDPOINT: /club/addMember
    BODY:
    {
            
    }
</ul>

### SEARCH
<ul>

#### SEARCH FOR MEMBER / BOOK 
    METHOD: GET
    ENDPOINT: /search?searchKey=[SEARCH KEY HERE]
    BODY: NONE
    return :
    {
        type: "user" | "book"
    }
    IF TYPE = BOOK
    {
        type: "book"
        title: String,
        description: String
    }
    ELSE IF TYPE = USER
    {
        type: "user"
        first_name: String,
        last_name: String
    }
    
</ul>

### BOOK REVIEW MANAGEMENT
<ul>

#### CREATE A REVIEW
    METHOD: POST
    ENDPOINT: /review
    BODY: {user_id, bookTitle, review, rating}
    returns : { message: "Review created successfully" }

#### GET REVIEWS MADE BY A CERTAIN USER
    METHOD: GET
    ENDPOINT: /review/getReviews/[USER ID]
    BODY: NONE
    returns: {
        "reviews": [
            {
                "id": INTEGER,
                "reviewer_id": INTEGER,
                "book_id": INTEGER,
                "rating": INTEGER,
                "review": STRING,
                "timestamp": DATE,
                "title": STRING,
                "description": STRING,
                "cover_image_url": URL,
                "ISBN": INTEGER,
                "release_date": DATE,
                "genre_id": INTEGER,
                "author_id": INTEGER,
                "purchase_url": STRING
            }
        ]
    }

#### GET THE TOP 10 RATED BOOKS
    METHOD: GET
    ENDPOINT: /review/top
    BODY: NONE
    returns: 
    {
    "books": [
        {
            "id": INTEGER,
            "reviewer_id": INTEGER,
            "book_id": INTEGER,
            "rating": INTEGER,
            "review": STRING,
            "timestamp": DATE,
            "title": STRING,
            "description": STRING,
            "cover_image_url": URL,
            "ISBN": INTEGER,
            "release_date": DATE,
            "genre_id": INTEGER,
            "author_id": INTEGER,
            "purchase_url": URL
        }
    ]
    }

#### GET REVIEWS FOR A BOOK
    METHOD: GET
    ENDPOINT: /review/top/:bookId
    BODY: NONE
    returns:
    {
        "reviews": [
            {
                "id": INTEGER,
                "reviewer_id": INTEGER,
                "book_id": INTEGER,
                "rating": INTEGER,
                "review": STRING,
                "timestamp": DATE
            }
        ]
    }

</ul>

### BOOK MANAGEMENT
<ul>

#### GET ALL BOOKS IN DB
    METHOD: GET
    ENDPOINT: /books
    BODY: NONE
    returns:
    [
        {
            "id": INTEGER,
            "title": STRING
        }
    ]

#### ADD A BOOK TO THE DB
    METHOD: POST
    ENDPOINT: /books/insert
    BODY: {title, description, cover_url, ISBN, release_date, genre_id, author_id, purchase_url}
    returns: 
    {
        message: "book added successfully"
    }
</ul>

### USER'S WISHLIST MANAGEMENT

<ul>

#### GET USER'S WISHLIST ITEMS
    METHOD: GET
    ENDPOINT: /wishlist/[USER ID]
    BODY: NONE
    returns:
    [
            {
                "user_id": INTEGER,
                "book_id": INTEGER
            },
    ]

#### ADD TO USER'S WISHLIST
    METHOD: POST
    ENDPOINT: /wishlist/add
    BODY: {userId, bookId}
    returns: {"message": "added book to wishlist"}

### REMOVE BOOK FROM USER'S WISHLIST
    METHOD: DELETE
    ENDPOINT: /wishlist/delete/[USER ID]/[BOOK ID]
    BODY: NONE
    returns {message: "deleted book from wishlist"}
</ul>


  
