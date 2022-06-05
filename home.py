from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)


bp = Blueprint('home', __name__)

@bp.route('/')
def home():
    return render_template('index.html', title="Home - LifebySM")