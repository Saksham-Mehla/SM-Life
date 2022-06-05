from flask import (
    Blueprint, flash, g, redirect, render_template, request, url_for
)


bp = Blueprint('play', __name__)

@bp.route('/play')
def play():
    return render_template('play.html', title="LifebySM")