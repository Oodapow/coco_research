from werkzeug.exceptions import HTTPException

class TODO(HTTPException):
    def __init__(self):
        super().__init__('This method is not supported.')
        self.code = 500

class BodyIsList(HTTPException):
    def __init__(self):
        super().__init__('The body json must be a list.')
        self.code = 500

class ListEntryNeedsID(HTTPException):
    def __init__(self, data):
        super().__init__(f'List entry needs _id. {data}')
        self.code = 500

class DuplicateKeyError(HTTPException):
    def __init__(self, key):
        super().__init__(f"The key: '{key}' already exists.")
        self.code = 500

class InvalidKey(HTTPException):
    def __init__(self, key):
        super().__init__(f"The key: '{key}' has an invalid format. It must be a 24-character hex(0-9a-f) string.")
        self.code = 500

class KeyNotFound(HTTPException):
    def __init__(self, key):
        super().__init__(f"The key: '{key}' was not found.")
        self.code = 500

class NoDataMatch(HTTPException):
    def __init__(self, data, db, col):
        super().__init__(f"No matches for data: '{data}' in '/data/{db}/{col}'.")
        self.code = 500