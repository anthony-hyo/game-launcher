DROP TABLE IF EXISTS games, launcher_deploys;

CREATE TABLE IF NOT EXISTS games
(
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(128) DEFAULT 'Game Example'                                               NOT NULL,
    description TEXT         DEFAULT 'No description available.'                                  NOT NULL,
    genre       VARCHAR(64)  DEFAULT 'MMORPG'                                                     NOT NULL,
    url         TEXT         DEFAULT 'https://www.google.com/'                                    NOT NULL,
    image_url   TEXT         DEFAULT 'https://placehold.co/1920x1080?text=Background&font=roboto' NOT NULL,
    cover_url   TEXT         DEFAULT 'https://placehold.co/300x450?textCover&font=roboto'         NOT NULL,
    icon_url    TEXT         DEFAULT 'https://placehold.co/100x100?text=Icon&font=roboto'         NOT NULL,
    play_click  BIGINT       DEFAULT 0                                                            NOT NULL,
    created_at  TIMESTAMP    DEFAULT NOW()                                                        NOT NULL,
    updated_at  TIMESTAMP    DEFAULT NOW()                                                        NOT NULL
);

CREATE TABLE IF NOT EXISTS launcher_deploys
(
    id          SERIAL PRIMARY KEY,
    system      VARCHAR(16) DEFAULT 'Windows'                                                                                                 NOT NULL,
    version     VARCHAR(16) DEFAULT '1.0.0'                                                                                                   NOT NULL,
    description TEXT        DEFAULT 'No description available.,No description available.,No description available.,No description available.' NOT NULL,
    url         TEXT        DEFAULT 'https://www.google.com/'                                                                                 NOT NULL,
    created_at  TIMESTAMP   DEFAULT NOW()                                                                                                     NOT NULL,
    updated_at  TIMESTAMP   DEFAULT NOW()                                                                                                     NOT NULL
);