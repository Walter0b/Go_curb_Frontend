INSERT INTO "customer" ("customer_name",
                        "street",
                        "city",
                        "state",
                        "zip_code",
                        "notes",
                        "terms",
                        "account_number",
                        "tax_id",
                        "balance",
                        "is_active",
                        "is_sub_agency",
                        "language",
                        "slug",
                        "id_currency",
                        "id_country",
                        "irs_share_key",
                        "currency_rate",
                        "agency",
                        "avoid_deletion",
                        "is_editable",
                        "alias",
                        "already_used",
                        "ab_key",
                        "tmc_client_number",
                        "id")
VALUES ('John Doe',
        '123 Main St',
        'New York',
        'NY',
        '10001',
        'A new customer',
        30,
        '12345678',
        '789012345',
        '1000.0',
        true,
        false,
        'English',
        1,
        1,
        1,
        'IRSShare',
        1,
        'MyAgency',
        false,
        true,
        'Alias123',
        0,
        'AB123',
        'TMC123',
        52) RETURNING "id"